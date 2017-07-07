import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import dotenv from 'dotenv';
import config from './webpack.config.dev';
import winston from 'winston';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const env = process.env.NODE_ENV || 'development';
if (env !== 'production') {
  dotenv.config({ silent: true });
}

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname, 'src/index.html'));
});

app.listen(port, err => {
  err ? winston.log(err) : open(`http://localhost:${port}`);
});
