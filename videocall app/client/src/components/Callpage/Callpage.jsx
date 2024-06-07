import React, { useReducer, useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Callpagefooter from "../UI/callpagefooter/callpagefooter";
import Callpageheader from "../UI/callpageheader/callpageheader";
import Meetinginfo from "../UI/meetinginfo/meetinginfo";
import Messenger from "../UI/Messenger/Messenger";
import messagereducers from "../../reducers/messagelistreducers";
import Peer from "simple-peer";
import { Base_url, getcallid, savecallid } from "../../utils/apiendpoints";
import {postRequest} from "../../utils/apirequest";
const Callpage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isadmin = window.location.hash === "#init";
  const url = `${window.location.origin}${window.location.pathname}`;
  const [messagelist, messagelistreducer] = useReducer(messagereducers, []);
  const [meetinginfopopup, setmeetinginfopopup] = useState(false);
  const [streamobj, setstreamobj] = useState(null);
  const [screenStream, setScreenStream] = useState(null);
  const [ispresenting, setispresenting] = useState(false);
  const [messenger, setmessenger] = useState(false);
  // const [ismessenger, setismessenger] = useState(false);
  const [messagealert, setmessagealert] = useState(true);
  const [isaudio, setisaudio] = useState(false);
  const peerRef = useRef(null); // Use ref to store the peer instance

  useEffect(() => {
    if (isadmin) {
      setmeetinginfopopup(true);
    }
    initwebrtc();
  }, [isaudio]); // Adding isaudio as a dependency to reinitialize when it changes

  const getreceivercode = async () => {
    const response = await getRequest(`${Base_url}${getcallid}/${id}`);
    if (response.code) {
      peerRef.current.signal(response.code);
    }
  };

  const toggleaudio = () => {
    console.log("toggle audio");
    setisaudio((prev) => !prev); // Toggle the isaudio state
  };

  const initwebrtc = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: isaudio, video: true }) // Requesting both audio and video
      .then((stream) => {
        setstreamobj(stream);
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.play().catch((error) => {
          console.error("Error playing video:", error);
        });

        // Create a new instance of Peer
        const peer = new Peer({
          initiator: isadmin,
          trickle: false,
          stream: stream,
        });
        peerRef.current = peer; // Store the peer instance in ref

        if (!isadmin) {
          getreceivercode();
        }

        peer.on("signal", async (data) => {
          if (isadmin) {
            let payload = {
              id,
              signalData: data,
            };
            await postRequest(`${Base_url}${savecallid}`, payload);
          } else {
            socket.emit("code", { code: data, url }, (cbData) => {
              console.log("code sent");
            });
          }
        });

        peer.on("connect", () => {
          console.log("Peer connected");
        });
        peer.on("data", (data) => {
          console.log("Received data:", data);
          messagelistreducer({ type: "add", payload: { user: "Peer", msg: data ,time: Date.now()} });
        });
        peer.on("data", (data) => {
          console.log("Received data:", data);
        });

        peer.on("stream", (remoteStream) => {
          // Handle receiving remote stream
          const video = document.querySelector("video");
          video.srcObject = remoteStream;
          video.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        });

        peer.on("error", (err) => {
          console.error("Peer error:", err);
        });
      })
      .catch((err) => {
        console.log("Error accessing media devices:", err);
      });
  };
  const disconnectcall = () => {
    streamobj.getTracks().forEach((track) => track.stop());
    peerRef.current.destroy();
    navigate("/");
  };
  const screenshare = async () => {
    navigator.mediaDevices.getDisplayMedia({ cursor: true }).then((stream) => {
      setScreenStream(stream);

      const videoTrack = stream.getVideoTracks()[0];
      const sender = peerRef.current._pc.getSenders().find((s) => s.track.kind === videoTrack.kind);
      sender.replaceTrack(videoTrack);

      stream.getVideoTracks()[0].onended = () => {
        const originalTrack = streamobj.getVideoTracks()[0];
        sender.replaceTrack(originalTrack);
        setispresenting(false);
      };

      setispresenting(true);
    });
  };
  const sendmsg = (msg) => {
    peerRef.current.send(msg);
    messagelistreducer({ type: "add", payload: { user: "You", msg:msg ,time:Date.now() } });
  };

  const stopshare = () => {
    screenStream.getTracks().forEach((track) => track.stop());
    const originalTrack = streamobj.getVideoTracks()[0];
    const sender = peerRef.current._pc
      .getSenders()
      .find((s) => s.track.kind === originalTrack.kind);
    sender.replaceTrack(originalTrack);

    setispresenting(false);
  };

  return (
    <div>
      <div className="callpageconatiner">
        <video
          className="video-container h-screen w-screen absolute z-[-1] object-cover top-0 left-0"
          src=""
          controls
        ></video>
        <Callpageheader
          setmessenger={setmessenger}
          messagealert={messagealert}
          messenger={messenger}
          setmessagealert={setmessagealert}
        />
        {messenger && <Messenger setmessenger={setmessenger} sendmsg={sendmsg}  messagelist={messagelist}/>}
        {isadmin && meetinginfopopup && (
          <Meetinginfo title={id} url={url} setmeetinginfopopup={setmeetinginfopopup} />
        )}
        <Callpagefooter
          ispresenting={ispresenting}
          stopshare={stopshare}
          screenshare={screenshare}
          toggleaudio={toggleaudio}
          isaudio={isaudio}
          disconnectcall={disconnectcall}
        />
      </div>
    </div>
  );
};

export default Callpage;
