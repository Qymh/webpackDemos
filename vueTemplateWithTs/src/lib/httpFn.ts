import ax from './axios'

export default {
  /**
   * get函数
   * @param api api接口
   * @param data 数据
   */
  get(api: string, data: object) {
    return new Promise((resolve, reject) => {
      ax.get(api, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
