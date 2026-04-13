
const BASE_URL = "http://192.168.1.103:5002/api";

export const loginApi = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const userData =  await res.json();
  localStorage.setItem("token", data.token);
  return userData;
};