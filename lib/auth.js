import Cookies from "js-cookie";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

export async function sendPhoneOTP(phoneNumber) {
  try {
    const response = await fetch(`${API_URL}/auth/phone-otp/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
}

export async function verifyPhoneOTP(phoneNumber, otp) {
  try {
    const response = await fetch(`${API_URL}/auth/phone-otp/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber, otp }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
}

export async function phoneLogin(phoneNumber) {
  try {
    const response = await fetch(`${API_URL}/auth/phone/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber }),
    });
    const data = await response.json();
    if (data.success) {
      Cookies.set("token", data.data.token, { expires: 7 });
      localStorage.setItem("user", JSON.stringify(data.data.user));
    }
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

export async function phoneRegister(userData) {
  try {
    const response = await fetch(`${API_URL}/auth/phone/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.success) {
      Cookies.set("token", data.data.token, { expires: 7 });
      localStorage.setItem("user", JSON.stringify(data.data.user));
    }
    return data;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
}

export function logout() {
  Cookies.remove("token");
  localStorage.removeItem("user");
  window.location.href = "/";
}
