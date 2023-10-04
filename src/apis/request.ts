import axios, { AxiosRequestConfig } from "axios";

const request = (config: AxiosRequestConfig<unknown>) => {
  const instance = axios.create({
    baseURL: "https://mock.apifox.cn/m1/3329798-0-default",
    timeout: 1000
  });

  const sessionId = localStorage.getItem("sessionId"); // 从localStorage 提取 Session ID

  // 将 Session ID 添加到请求头
  if (sessionId) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${sessionId}`;//Bearer发送身份令牌
  }

  return instance(config);
};

export default request;