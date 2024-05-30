import moment from 'moment'

export const formdata=(timestamp) => {
  return moment(timestamp).format('h:mm A');
};
