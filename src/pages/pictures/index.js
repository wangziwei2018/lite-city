import React, { useState } from 'react'
import { Pagination, Modal } from 'antd'
import './pictures.css'

const list = [
  {
    name: 'fengjing001',
    src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1753371632,983488119&fm=26&gp=0.jpg'
  },
  {
    name: 'fengjing002',
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598461621837&di=efd5f54333b0251ef31643abb3502124&imgtype=0&src=http%3A%2F%2Fimg.bihuaku.com%2Ftuku%2Fyulantu%2F110111%2F292-11011104113886.jpg'
  },
  {
    name: 'fengjing003',
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598461621837&di=efd5f54333b0251ef31643abb3502124&imgtype=0&src=http%3A%2F%2Fimg.bihuaku.com%2Ftuku%2Fyulantu%2F110111%2F292-11011104113886.jpg'
  },
]
const Pictures = (props) => {
  const [showPic, setShowPic] = useState(false)
  const [currentPic, setCurrentPic] = useState({})
  const showModal = (pic) => {
    setCurrentPic(pic)
    setShowPic(true)
    document.body.style.overflow='hidden'
  }
  const hideModal = () => {
    setShowPic(false)
    document.body.style.overflow='auto'
  }
  return (
    <div className="picture-page-wrap">
      <div className="picture-page-list">
        {list.map(pic => (
          <div className="picture-page-picgroup" key={pic.name}>
            <img src={pic.src} className="picture-page-pic" alt="图片" />
            <div className="picture-page-tips" onClick={() => showModal(pic)}>点击查看完整图片</div>
          </div>
        ))}
      </div>
      <div className="picture-page-pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
      <Modal
        visible={showPic}
        destroyOnClose
        okText="下载"
        cancelText="关闭"
        maskClosable={false}
        width={1000}
        onCancel={hideModal}
        // onOk={() => window.open(currentPic.src, '_self')}
      >
        <div>
          <img src={currentPic.src} className="picture-page-current" alt="图片" />
          <div className="picture-page-modal-tips">
            <div>图片编号：</div>
            <div>{currentPic.name}</div>
            <div className="mgt10">请注明图片来源：</div>
            <div>小站图库</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Pictures
