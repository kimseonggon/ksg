const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        "/naver-api",
        createProxyMiddleware({
            target: "https://openapi.naver.com",
            changeOrigin: true,
            pathRewrite: {
                "^/naver-api": "",
            },
            onProxyReq: (proxyReq, req, res) => {
                console.log(`[ProxyReq] ${req.method} ${req.url}`);
                console.log("Headers:", proxyReq.getHeaders());
            },
            onProxyRes: (proxyRes, req, res) => {
                console.log(`[ProxyRes] ${proxyRes.statusCode} ${req.url}`);
            },
            onError: (err, req, res) => {
                console.error("[Proxy Error]", err.message);
            },
        })
    );
};
