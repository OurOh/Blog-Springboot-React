const{ createProxyMiddleware } = require("http-proxy-middleware");

MediaSourceHandle.exports = (app) => {
    app.use("/api/myskills",
        createProxy
    )
}