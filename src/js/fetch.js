import md5 from "md5-hash";

function getTimestamp() {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const day = ("0" + date.getUTCDate()).slice(-2);
  return `${year}${month}${day}`;
}

export const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Auth": md5(`Valantis_${getTimestamp()}`),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  },
};
