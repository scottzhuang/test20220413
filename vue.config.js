module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/test20220413/' // test20200915 為 repo 名稱
      : '/',
    lintOnSave:false
  }