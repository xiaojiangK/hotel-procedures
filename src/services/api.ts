import config from '@/config';
import axios from 'axios';

export async function Login(data:object) {
  return axios.post(`${config.baseURL}api/login`, data);
}

export async function Register(data:object) {
  return axios.post(`${config.baseURL}api/register`, data);
}

export async function Retrieve(data:object) {
  return axios.post(`${config.baseURL}api/retrieve`, data);
}

export async function GetCode(phone:string) {
  return axios.post(`${config.baseURL}api/code`, { phone });
}

export async function ChangeInfo(name:string) {
  return axios.post(`${config.baseURL}api/info`, { name });
}

export async function CancelOrder(flag:string, id:string) {
  return axios.post(`${config.baseURL}api/CancelOrder`, { flag, order_id: id });
}

export async function HotelOrder(flag:string, id:string) {
  return {
    data: {
      arrival_time: '1566748800',
      bed_type: null,
      classify: '1',
      code: null,
      company_id: '0',
      coordinates: '37.864933,112.567528',
      coupons_id: null,
      days: '1',
      dd_time: '14:00',
      departure_time: '1566835200',
      dis_cost: '0.95',
      from_id: null,
      hb_cost: null,
      hb_id: null,
      id: '805',
      is_commission: '2',
      is_delete: '0',
      jj_time: '0',
      name: 'admin',
      num: '1',
      order_no: '201908261135336712',
      out_trade_no: '14330091021566790533',
      pay_time: '1566790533',
      price: '1.00',
      qr_fromid: '',
      roomCost: {
        key: '秀豹超级会员9.5折',
        is_vip: 1,
        value: 95,
        total_cost: 0.95,
        price_list: [
          {
            dateday: '08月26日',
            discount_price: 0.95,
            id: '790',
            mprice: '1.00',
            order_id: '805'
          }
        ]
      },
      room_id: '289',
      room_logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Zw088xeJASJESbHcXw9E0AXXeC6xe3.jpg?x-oss-process=i',
      room_type: '标准大床房',
      sale_id: '0',
      seller_address: '山西省太原市迎泽区柳巷南路86号',
      seller_id: '1',
      seller_name: '圣美精品酒店2',
      status: '4',
      tel: '13231231231',
      time: '1570957400',
      total_cost: '0.95',
      type: '0',
      uniacid: '4',
      user_id: '4913',
      vip_coupon: '0.95',
      voice: '1',
      yhq_cost: null,
      yj_cost: null,
      ytyj_cost: null,
      yyzk_cost: null
    }
  }
  return axios.get(`${config.baseURL}api/OrderDetail?order_id=${id}&flag=${flag}`)
}

export async function UploadFile(upfile:any) {
  return axios.get(`${config.baseURL}api/uploadFile?upfile=${upfile}`)
}

export async function SaveAssess(data:any) {
  return axios.post(`${config.baseURL}api/SaveAssess`, data)
}

export async function AssessList(page?:number, type?:number, id:any='') {
  return {
    data: [
      {
        arrival_time: '1566748800',
        content: '“奖惩并行才能最大激发公职人员的工作积极性和热情”“事事有法可依，越来越规范”“高素质的公职人员，必须有法规来约束”……近日，《中华人民共和国公职人员政务处分法（草案）》全文公布，面向社会征求意见。',
        display: '1',
        id: '84',
        img: [{img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'}],
        img_type: '1',
        logo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqk7zaqpGsU3icq8sGG42QkT0XedHsQqBJPm0gibGQEXlN3A5JfAcXicnhf5rJJzWfuLqxoHFYt6zV0A/132',
        name: '꧁꫞꯭陌꯭小꯭江꯭꫞꧂',
        order_id: '805',
        reply: '',
        reply_time: '0',
        room: '标准大床房',
        room_id: '289',
        score: '0',
        seller_id: '0',
        status: '1',
        time: '1570766323',
        uniacid: '4',
        user_id: '4913'
      },
      {
        arrival_time: '1566748800',
        content: '“奖惩并行才能最大激发公职人员的工作积极性和热情”“事事有法可依，越来越规范”“高素质的公职人员，必须有法规来约束”……近日，《中华人民共和国公职人员政务处分法（草案）》全文公布，面向社会征求意见。',
        display: '1',
        id: '84',
        img: [
          {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
          {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
          {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
          {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'}
        ],
        img_type: '1',
        logo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqk7zaqpGsU3icq8sGG42QkT0XedHsQqBJPm0gibGQEXlN3A5JfAcXicnhf5rJJzWfuLqxoHFYt6zV0A/132',
        name: '꧁꫞꯭陌꯭小꯭江꯭꫞꧂',
        order_id: '805',
        reply: '嘻嘻，不错不错',
        reply_time: '1570766323',
        room: '标准大床房',
        room_id: '289',
        score: '0',
        seller_id: '0',
        status: '1',
        time: '1570766323',
        uniacid: '4',
        user_id: '4913'
      }
    ]
  }
  return axios.get(`${config.baseURL}api/AssessList?page=${page}&img_type=${type}&order_id=${id}`)
}

export async function AssessCount(id:any) {
  return {
    code: 200,
    data: {
      num: 1,
      total: 1
    }
  }
  return axios.get(`${config.baseURL}api/AssessCount?user_id=${id}`)
}

// 业绩数据
export async function Performance(id:any) {
  return {
    data: {
      code: 200,
      msg: '',
      data: {
        today: [200, 20, 2000],
        month: [200, 20, 2000],
        company: [20, 30],
      }
    }
  }
  return axios.get(`${config.baseURL}api/Performance?id=${id}`)
}

// 邀请成员
export async function InviteMember(id:any) {
  return {
    data: {
      msg: '',
      code: 200,
      data: {
        result: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAD5UlEQVRIS+1WTWxUVRg95747QNN25k2Cgjv/QIwLpSaywGj9QbR2ZhqilZUubDBRS9REo0QiqfEvGtQ2kiC60BVWrX2vhZCmkUpgQ1LqxhjByMIFGAnzpi22MPfdz7yZaWmnr2ViuvRmNnPf+c6538/9vkvUurz6NQ4S+0BIKMUXkLv0Vy2mvCaoF3V6ZapTqN4g4EZ4AfIU+765XOhBO6aW4lhcoK/heq0THQJ0ElhbIhGxAKOfqgidJ9BjdPEAWib/jhOaESAON6zWJnGbFdlExS0UeRBgYtaIMkIrr5aIyY8A3n+VUIoi/FGUDCnhSaOLv6Fl8kIJqr30BCirAOqYE1gAR0D50GSCkbnf9YDbDGEk+ChQ9mj+EgPhNLWflnkfRIogT1rikBV7ENnC2SXz5Kdu0lTbIXgcIveAc7xGdOyKgEC+DCH7oAu/oAWXr5n8OMBhrIRJ3eGAzxN8NoLMChDycjEbfPKfiKuMEr77koAf/y9QDsyh5CZtnb0m5Ha0Xfwz2lq+EPU1rne0c5zgdQI5G04HG9COK8sj0Fu/1lmVOEHwZkTtSdAe5oK+5fHgKBr0pDsC4d0RobV40bblP5spppo9cPxUB8EzJhv8NFuJ+5HQN6QHATxS2iPeM5n8rrmVWpOAM+hmaRG5HFqw02bzn0ckjud+RfLpUk8S+TrMBc9U351qgX8A1AHSZbLBWzNg3Z/cKso5ONOiAemOeguI1yqYIXMu34rnUKwW0J7bBXI3gClq3x0F2ATKsMkEW+aBv2vcoFc4PsB18/Ypo6YhaMYDmIy7+dp3hwE+BMgpas99G+SbUSUY2tuRGT8zz2gwldaW35YNomEjf4TTxc1ov3Q+tq0MJNdpUb8CdAC8Q/zg3qgVTkddUET8MBfkFhgehXYm0p8C8mRownuxbeL0Yj3L8VyPZBYiRWOxvjRwHN/tJthZOiG5I8xcPBBL4NWvWWoWKz+9QwH7K572hNlgZ3mieasbHZoxgrcAcgWUjMkUhhY7ZWzc+5NboVSUrxWlMIq+C7kLE1dnsududMBjJBoEmILFU2FbfqAWEac/nYHCNwTqRDAZQu5DLhgrX5O5azD1sGOVHwGjpFtytx3Nf4A9iEbnwrUHSjWlX1eQriip0cFCZbNoLQzPgBe+KgbcZkfYRyBdAZ0g7M5itnBqrkLCTzUJVDeAzeWYIx9StqFqdsc/W7zkrZqqF+DGCqkAMmwFR6L/CngMLJVtxV7GjNh25MZ/r3Zz8XdRuee8IsAuAsm4CAkwTuBdcy6/N+5GL8xBHMtgKq0EHUr4BIA7yxD+bGm/t8QXaC3klyqEfwH73sbhH9YKGQAAAABJRU5ErkJggg=='
      }
    }
  }
  return axios.get(`${config.baseURL}api/InviteMember?id=${id}`)
}

// 费用明细
export async function GetRoomCost(roomId:any, userId:any, start:string, end:string) {
  return {
    data: {
      is_vip: 1,
      key: '秀豹超级会员9.5折',
      price_list: [
        {dateday: '10月12日', mprice: '2.00', discount_price: 1.9}
      ],
      total_cost: 1.9,
      value: 95
    }
  }
  return axios.get(`${config.baseURL}api/GetRoomCost?room_id=${roomId}&user_id=${userId}&start=${start}&end=${end}`)
}

// 酒店超市订单
export async function MarketOrder(id:any, flag:any) {
  return {
    code: 200,
    data: {
      cancel_time: null,
      create_time: '1570700237',
      delete_time: null,
      finish_time: null,
      id: '772',
      is_delete: '0',
      order_no: '201910101737177932',
      out_trade_no: '14330091021570700237',
      pay_time: '1570700237',
      price: '68.00',
      refund_time: null,
      reject_time: null,
      room_num: '2088',
      seller_id: '1',
      send_time: null,
      status: '1',
      tel: '13288474512',
      type: '1',
      uniacid: '4',
      update_time: '2019-10-11 10:34:21.396453',
      user_id: '4913',
      goods: [
        {
          goods_addtime: '1569288703',
          goods_attribute: '1',
          goods_classify: '42',
          goods_details: '',
          goods_id: '125',
          goods_img: 'images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg',
          goods_is_open: '1',
          goods_name: '芙蓉王',
          goods_sort: '1',
          goods_subheading: '香烟',
          goods_unit: '盒',
          goods_volume: '0',
          seller_id: '1',
          uniacid: '4'
        }
      ],
      goods_info: [
        {
          goodsorder_id: '772',
          id: '813',
          img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg?x-oss-process=image/resize,m_mfit,h_300,w_400',
          name: '芙蓉王',
          number: '2',
          price: '30.00',
          spec_id: '803',
          total_price: '68.00',
          type: '1'
        },
        {
          goodsorder_id: '772',
          id: '814',
          img: 'https://static.hotel.showboom.cn/images/4/2019/05/L8z484cP0ohD0n4Arq404AaKKka4zO.jpg?x-oss-process=image/resize,m_mfit,h_300,w_400',
          name: '红牛',
          number: '1',
          price: '8.00',
          spec_id: '793',
          total_price: '68.00',
          type: '1'
        }
      ]
    }
  }
  return axios.get(`${config.baseURL}api/MarketOrder?order_id=${id}&flag=${flag}`)
}

// 酒店设施订单
export async function ServiceOrder(id:any, flag:any) {
  return {
    code: 200,
    data: {
      cancel_time: null,
      create_time: '1571022622',
      delete_time: null,
      finish_time: null,
      id: '774',
      is_delete: '0',
      order_no: '201910141110227696',
      out_trade_no: '14330091021571022622',
      pay_time: '1571022622',
      price: '56.00',
      refund_time: null,
      reject_time: null,
      room_num: '',
      seller_id: '1',
      send_time: null,
      status: '3',
      tel: '13288474510',
      type: '3',
      uniacid: '4',
      update_time: '2019-10-14 11:10:22.250023',
      user_id: '4913',
      goods: [
        {
          goods_addtime: '1560238498',
          goods_attribute: '3',
          goods_classify: '0',
          goods_details: '&lt;ol class=&quot; list-paddingleft-2&quot; style=&quot;list-style-type: decimal;&quot;&gt;&lt;li&gt;&lt;p&gt;此券仅用于圣美精品酒店早餐&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券不可兑换现金，不设找零&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券仅供一人使用，当天有效&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;本酒店拥有最终解释权。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;',
          goods_id: '116',
          goods_img: 'images/4/2019/05/vRJTt131Wm5rk1ZtY3ZjYT3RtYn4Iy.png',
          goods_is_open: '1',
          goods_name: '早餐券',
          goods_sort: '1',
          goods_subheading: '早餐时间 ： 7：00-9：00',
          goods_unit: '张',
          goods_volume: '1',
          seller_id: '1',
          uniacid: '4',
        }
      ],
      goods_info: [
        {
          goodsorder_id: '773',
          id: '815',
          img: 'https://static.hotel.showboom.cn/images/4/2019/05/vRJTt131Wm5rk1ZtY3ZjYT3RtYn4Iy.png?x-oss-process=image/resize,m_mfit,h_300,w_400',
          name: '早餐券',
          number: '2',
          price: '28.00',
          spec_id: '538',
          total_price: '56.00',
          type: '3'
        }
      ]
    }
  }
  return axios.get(`${config.baseURL}api/MarketOrder?order_id=${id}&flag=${flag}`)
}

// 订单状态
export async function OrderStatus(id:any) {
  return axios.get(`${config.baseURL}api/OrderStatus?id=${id}`)
}

// 酒店设施
export async function Volume(id:any='') {
  return {
    code: 200,
    data: [
      {
        goods_addtime: '1560238498',
        goods_attribute: '3',
        goods_classify: '0',
        goods_details: '&lt;ol class=&quot; list-paddingleft-2&quot; style=&quot;list-style-type: decimal;&quot;&gt;&lt;li&gt;&lt;p&gt;此券仅用于圣美精品酒店早餐&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券不可兑换现金，不设找零&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券仅供一人使用，当天有效&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;本酒店拥有最终解释权。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;',
        goods_id: '116',
        goods_img: 'https://static.hotel.showboom.cn/images/4/2019/05/Qo33uZ4kQ4ogrL6rhdKjhkv0Zdh2O5.jpg',
        goods_is_open: '1',
        goods_name: '接站 太原南站 24:00-06:00',
        goods_sort: '1',
        goods_subheading: '与前台确认后再点击付款',
        goods_unit: '次',
        goods_volume: '1',
        seller_id: '1',
        specifications: [
          {
            goods_id: '116',
            goods_price: '28.00',
            goods_specifications: '次',
            goods_stock: '10000',
            id: '538'
          }
        ]
      }
    ]
  }
  return axios.get(`${config.baseURL}api/Volume?seller_id=${id}`)
}

// 酒店超市
export async function Goods(id:any='',classId:any='') {
  return {
    code: 200,
    data: [
      {
        cid: '42',
        cname: '水果',
        goods_addtime: '1569288703',
        goods_attribute: '1',
        goods_classify: '42',
        goods_details: '',
        goods_id: '125',
        goods_img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg',
        goods_is_open: '1',
        goods_name: '芙蓉王',
        goods_sort: '1',
        goods_subheading: '香烟',
        goods_unit: '盒',
        goods_volume: '0',
        seller_id: '1',
        specifications: [
          {
            goods_id: '125',
            goods_price: '30.00',
            goods_specifications: '20支',
            goods_stock: '100',
            id: '803'
          }
        ]
      },
      {
        cid: '42',
        cname: '水果',
        goods_addtime: '1569288703',
        goods_attribute: '1',
        goods_classify: '42',
        goods_details: '',
        goods_id: '126',
        goods_img: 'https://static.hotel.showboom.cn/images/4/2019/05/L8z484cP0ohD0n4Arq404AaKKka4zO.jpg',
        goods_is_open: '1',
        goods_name: '红牛',
        goods_sort: '1',
        goods_subheading: '饮料',
        goods_unit: '瓶',
        goods_volume: '0',
        seller_id: '1',
        specifications: [
          {
            goods_id: '125',
            goods_price: '5.00',
            goods_specifications: '20瓶',
            goods_stock: '100',
            id: '802'
          }
        ]
      }
    ]
  }
  return axios.get(`${config.baseURL}api/Goods?seller_id=${id}&class=${classId}`)
}

// 酒店周边
export async function Periphery() {
  return {
    code: 200,
    data: [
      {
        add_time: '1559109504',
        coordinates: '37.858740,112.558280',
        id: '7',
        img: 'https://static.hotel.showboom.cn/images/4/2019/05/OBNY8B7l7lb4QNTb8TE2emC2p3bbss.jpg',
        name: '老太原菜馆(南宫店)',
        phone: '03514053388',
        seller_id: '1',
        site: '迎泽大街238号南宫东院科技大楼',
        sort: '1',
        state: '1',
        subheading: '迎泽大街238号南宫东院科技大楼',
        uniacid: '4'
      }
    ]
  }
  return axios.get(`${config.baseURL}api/Periphery`)
}

// 超市分类
export async function Classify() {
  return {
    code: 200,
    data: [
      {
        addtime: '1566546656',
        id: '42',
        name: 'Snacks',
        seller_id: '1',
        sort: '1',
        status: '1',
        uniacid: '4'
      },
      {
        addtime: '1566546656',
        id: '43',
        name: 'Fruits',
        seller_id: '1',
        sort: '1',
        status: '1',
        uniacid: '4'
      }
    ]
  }
  return axios.get(`${config.baseURL}api/Classify`)
}

// 酒店详情
export async function HotelDetail(uniacid:any) {
  return {
    code: 200,
    data: {
      address: '山西省太原市迎泽区柳巷南路86号',
      app_id: null,
      app_logo: 'http://img.heimilink.com/?img_k=1A1341595C41bc97dd',
      app_qrcode: 'http://img.heimilink.com/?img_k=B0134159aDA2ac9bED',
      balance: '0.000',
      bareaName: null,
      bd_id: '0',
      boardroom: '0',
      bq_logo: '',
      breakfast: '0',
      breakfast_ticket: '1',
      channel_id: '4',
      city: '太原市',
      closeStatus: null,
      coordinates: '37.864933,112.567528',
      dd_open: '0',
      decorationDate: '2019',
      district: '迎泽区',
      ewm_logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Z2JdtsrWWRbtdJI9rmtr2jE1e252P2.jpg',
      facilities: {101009: 'others', 101011: 'others2', 101013: 'others3', 101014: 'others4decorationDate'},
      facility: '1',
      floorNum: '20',
      gym: '0',
      handle: '',
      id: '1',
      introduction: '<p style="color: #666">酒店介绍酒店介绍酒店介绍酒店介绍酒店介绍酒店介绍</p>',
      policy: '<p style="color: #666">酒店政策酒店政策酒店政策酒店政策酒店政策酒店政策</p>',
      is_use: '1',
      link_name: '测试',
      link_tel: '13049090842',
      ll_num: '17334',
      modifyDomain: '',
      name: '圣美精品酒店',
      openDate: '2016',
      open_time: '2016-05-01 00:00:00',
      other: '',
      owner: '1',
      park: '0',
      periphery: '1',
      prompt: '',
      province: '山西省',
      publish_time: null,
      receipt_status: '2',
      remark: '',
      roomNum: '80',
      room_booking: '1',
      rule: '不可退订',
      score: null,
      scort: '2',
      service: {101006: 'parking', 101007: 'card', 101038: 'clock', 101039: 'cup'},
      sfz_img1: '',
      sfz_img2: '',
      sq_time: '0',
      star: '暂无星级(经济型)',
      state: '2',
      store: '1',
      support: '',
      tel: '0351-7777520',
      template_id: null,
      theme_type: '普通',
      time: '1558173360',
      uniacid: '4',
      unionPay: '0',
      user_id: '0',
      vip_merchant: null,
      wake: '0',
      water: '0',
      webDomain: '',
      wifi: '1',
      wx_mchid: '',
      wx_open: '0',
      xb_status: '1',
      ye_open: '0.00',
      yy_img: '',
      zd_money: '99.00',
      img: ['https://static.hotel.showboom.cn/images/4/2019/06/Z2JdtsrWWRbtdJI9rmtr2jE1e252P2.jpg'],
      wifiList: [
        {
          authentication: '1',
          wifi_name: 'smjp8501',
          wifi_pwd: 'smjp8501'
        },
        {
          authentication: '2',
          wifi_name: 'smjp8502',
          wifi_pwd: 'smjp8502'
        }
      ]
    }
  }
  return axios.get(`${config.baseURL}api/PjDetails?uniacid=${uniacid}`)
}

// 酒店配置
export async function GetSystem() {
  return {
    code: 200,
    data: {
      apiclient_cert: '-----BEGIN CERTIFICATE-----↵↵MIIEFjCCAv6gAwIBAgIUKa+9icQXao9FQ5x7z06j+s1oY8swDQYJKoZIhvcNAQEL↵↵BQAwXjELMAkGA1UEBhMCQ04xEzARBgNVBAoTClRlbnBheS5jb20xHTAbBgNVBAsT↵↵FFRlbnBheS5jb20gQ0EgQ2VudGVyMRswGQYDVQQDExJUZW5wYXkuY29tIFJvb3Qg↵↵Q0EwHhcNMTgxMTIyMDI0MDMzWhcNMjMxMTIxMDI0MDMzWjCBpzETMBEGA1UEAwwK↵↵MTQzMzAwOTEwMjEbMBkGA1UECgwS5b6u5L+h5ZWG5oi357O757ufMT8wPQYDVQQL↵↵DDblsbHopb/lnKPnvo7phZLlupfnrqHnkIbmnInpmZDlhazlj7jlnKPnvo7nsr7l↵↵k4HphZLlupcxCzAJBgNVBAYMAkNOMRIwEAYDVQQIDAlHdWFuZ0RvbmcxETAPBgNV↵↵BAcMCFNoZW5aaGVuMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs7gk↵↵gCP9TIYs/6bnzQSnOJRHYyULJMb6Z9s44vPpHh2TqgJKQC6xZByGndHLnmbbKLbh↵↵ifIS+yj7anCBNgDvBVYJG1B8WalSX0I+kwFxvkn5AE2MJG8bt7fQDizO1Avj0Dlt↵↵fqivfzchcnba+Cld+I85gB8OBd5zcViFsVYlW4+8jYVjm42RH5B7Vg2RysNPsyAO↵↵Aw38mHF5VQ/6zI7Kkq84uUdwOVweSWPmcNeicek3ixhQybDc4EqFRkmgqxybKutp↵↵3/9andim+GrOXHfYH/2y5xIEvgakKfiYr0foHENnQ0mzGqLOdSfeBNWvALI/kNdV↵↵roBTa/l2Odic1jSnewIDAQABo4GBMH8wCQYDVR0TBAIwADALBgNVHQ8EBAMCBPAw↵↵ZQYDVR0fBF4wXDBaoFigVoZUaHR0cDovL2V2Y2EuaXRydXMuY29tLmNuL3B1Ymxp↵↵Yy9pdHJ1c2NybD9DQT0xQkQ0MjIwRTUwREJDMDRCMDZBRDM5NzU0OTg0NkMwMUMz↵↵RThFQkQyMA0GCSqGSIb3DQEBCwUAA4IBAQB6N2T6pDYIfIW6DjeklEG7huIObfUh↵↵KYBeBsm+a6VdPlIhogehGm1o6e+NKKjEwBDVONjqhtSf6z1grearTs4BARxlt6iJ↵↵gmBV/ceTN4OoO7VjSZWXKxoJoh0v29j4rlaXEtpD33rMihTcoCsdvxGDH+DGDrAD↵↵IMnttHX5ZPkI3v8i71jPxGvAqGiMMxyMe9Sjug5rzv3Mm+AT2Q9Ud1fc9HAU/lew↵↵Idy1dmXK6SQytYEkYHBy3Ib7KcTR3H2b2eXe3K27Y7NpEAGJ7YqR8HOL6PiKXS92↵↵VlLs9xlHjW30KzFmuEAGQHRgyDDesqsZXYLQemCg21lgfg8mOYFLxmBu↵↵-----END CERTIFICATE-----',
      apiclient_key: '-----BEGIN PRIVATE KEY-----↵↵MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzuCSAI/1Mhiz/↵↵pufNBKc4lEdjJQskxvpn2zji8+keHZOqAkpALrFkHIad0cueZtsotuGJ8hL7KPtq↵↵cIE2AO8FVgkbUHxZqVJfQj6TAXG+SfkATYwkbxu3t9AOLM7UC+PQOW1+qK9/NyFy↵↵dtr4KV34jzmAHw4F3nNxWIWxViVbj7yNhWObjZEfkHtWDZHKw0+zIA4DDfyYcXlV↵↵D/rMjsqSrzi5R3A5XB5JY+Zw16Jx6TeLGFDJsNzgSoVGSaCrHJsq62nf/1qd2Kb4↵↵as5cd9gf/bLnEgS+BqQp+JivR+gcQ2dDSbMaos51J94E1a8Asj+Q11WugFNr+XY5↵↵2JzWNKd7AgMBAAECggEAaKIxPhm2A7Oqxz1Zf9fRs/NAjMyobEUczRKpUBlKBCqc↵↵KkMjD7MfvHWPOptGvXaM6mtvbGzv+CKoHhRaZiKtBqJMswZtH5ahSqy62cPhgTR4↵↵MGD10tCNhq0SCO61jGdPv49v3GpBowNqCcaBPjJ3b5uTkrCB7ZDSDY/IZrMNFPzk↵↵MZK3fMvpJR1wOelqgQ1mRTkj3ImjXJmLUTttf5ztgcFVLttQEz2OwAykJtaksYW5↵↵zX9NPPAVRmRrEd2CdE/OkoDl8eIHBr4jZWdnzxjkRi0EqIdO1Yt6wZ+RSG4FTTMO↵↵b77Br87wj05K9SFUgVgvZ5ILxaG9Y1u8THkPssS/oQKBgQDlAkaqS63aERu4ziUQ↵↵BmAtWw3R3F3MAuRZ+nKTLVlV2S+OcubomroJ01kXxbVl6lBLx26fy2JQTniEXf8d↵↵INZXMgkPMcT32yuRn1Y8TKA2AJu7iHcEpiMr9Il7JhTE7TDdFtCi77I3HV0dg6e2↵↵2qi9WMRc7GQCRidGs1SGyK/MBQKBgQDI5q/IJ/9zUACE3QZY2cbyO/MmdJYoi3sy↵↵HxJQ7JBtMTNLKaGQPn3IXetu6rgZNfgd9H/HuQ7ZfsgJgb4E2zokgOYOA8/jwv2G↵↵5jLH9gUuI3QJGTtGv/sxDlEQp3MvqxyNbdceL7ZuuSNhSkTL+8OQ37CCrT968+V1↵↵AWvS/OB9fwKBgDn9GI24uh4U5PMn6ASlyKbTfq1cYrftJ4uNOoQAILX3V+53M/dE↵↵bsVcKhw16RgUfB6kMmPuKUfyhtvlvVrP3NaZiee6D4k/i0nFkh2UvaDPCKA1DwYz↵↵V4ai1klDvFCdSxlA1LXdgkAohFKb6tUHi2De4GIzTaOxxfJGKKo0mSdNAoGBALa1↵↵7rpXfiCOatpq9YHLFf9p/FpF/+aB7BoKXisQ6s0TyPWbuB8qZlTa7eqjN6leBvif↵↵S7MFn/a4Mg9LWtip1LgsLo4ic2hOBysvopFvMwjiH37C3sEaisXzolBGKiD5Ou95↵↵LQJ8HCuY3w91bxohL5xLhAlkrO4ScOW31Cs/5p7bAoGASmViJkVXTAv3FQgbpNAh↵↵R0G/SyPpc9s4YKW/q5PLqVWWKkNGhLSBYc2NizC5Q+R7mohoQX8UrKNp7exyNwxM↵↵HS0v430JGxaW5+lC+yp/64+Kc9zFy8oY7k7B+dovHpAcYD6/hLsuwVslpTQR1hFV↵↵DXpxENF3tTg92dMVbg77IRo=↵↵-----END PRIVATE KEY-----',
      appid: 'wx7a7e4df482d7357a',
      appkey: '9a484caf403b3cd63786f732e7fa1f90',
      appsecret: '1f920d3378b6174cef588326b5c2208d',
      bj_logo: 'images/2/2019/02/uW9XX8X9hH9ZPZwBPcZSZs899ojJO9.jpg',
      bq_logo: '',
      bq_name: '',
      client_ip: '******',
      color: '#182E8F',
      hy_img: 'images/2/2019/02/uXBt2MU2ThN8bu7HMhFZj081mhJ8of.jpg',
      hy_rule: '<p>这里是平台会员规则</p>',
      id: '1',
      is_dxyz: '1',
      is_order: '2',
      is_score: '1',
      is_sfz: '2',
      is_sjrz: '1',
      jd_custom: '',
      jf_rule: '<p>这里是平台积分规则</p>',
      jjrz_tid: '',
      link_logo: 'images/2/2019/02/W2USqpC8Qk7K2ju8jS0y7q0X02XQcT.png',
      link_name: '',
      map_key: 'LG5BZ-NV5KU-5TIVI-BCSNL-XF637-MEB3S',
      mchid: '1433009102',
      open_member: '1',
      pl_score: '0',
      pt_name: '速旅假期',
      rc_tk: '',
      rz_notice: '',
      rz_tid: '',
      seller_id: '1',
      support: '',
      tel: '18826734552',
      tid1: '',
      tid3: '',
      tid4: '',
      total_num: '0',
      tpl_id: '136248',
      tpl_id2: '136250',
      tx_mode: '0',
      tx_notice: '',
      tx_sxf: '',
      type: '1',
      tz_appid: '',
      tz_name: '',
      uniacid: '4',
      wxkey: 'Shanxitaiyuansmjpjd8603517777520',
      xf_score: '0',
      zd_money: '0.00'
    }
  }
  return axios.get(`${config.baseURL}api/GetSystem`)
}

// 早餐券
export async function Breakfast(id:any) {
  return {
    code: 200,
    data: [
      {
        goods_addtime: '1560238498',
        goods_attribute: '3',
        goods_classify: '0',
        goods_details: '&lt;ol class=&quot; list-paddingleft-2&quot; style=&quot;list-style-type: decimal;&quot;&gt;&lt;li&gt;&lt;p&gt;此券仅用于圣美精品酒店早餐&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券不可兑换现金，不设找零&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券仅供一人使用，当天有效&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;本酒店拥有最终解释权。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;',
        goods_id: '116',
        goods_img: 'https://static.hotel.showboom.cn/images/4/2019/05/vRJTt131Wm5rk1ZtY3ZjYT3RtYn4Iy.png',
        goods_is_open: '1',
        goods_name: '早餐券',
        goods_sort: '1',
        goods_subheading: '早餐时间 ： 7：00-9：00',
        goods_unit: '张',
        goods_volume: '1',
        seller_id: '1',
        specifications: [
          {
            goods_id: '116',
            goods_price: '28.00',
            goods_specifications: '单人券',
            goods_stock: '10000',
            id: '538'
          }
        ]
      }
    ]
  }
  return axios.get(`${config.baseURL}api/Service?seller_id=${id}`)
}

// 房间列表
export async function RoomList(start:any,end:any,id:any) {
  return {
    code: 200,
    data: [
      {
        acreage: '20.00',
        air_conditioner: '0',
        bathroom: '0',
        bathrooms: '0',
        bed: '0',
        bedtype: '双床',
        book_rules: null,
        breakfast: '1',
        cancel_rules: null,
        classify: '0',
        facilities: 'null',
        floor: '1',
        id: '9',
        img: null,
        is_refund: '0',
        logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Q885zAPKM35AP5KpZ58wkIaYkWKFM3.jpg',
        min_num: 3,
        min_price: 2,
        name: '精致标间',
        people: '2',
        price: '2.00',
        roomType: '0',
        room_desc: null,
        rz_time: '',
        seller_id: '1',
        size: '（1.2*2） 2张',
        sort: '1',
        state: '1',
        total_num: '3',
        uniacid: '4',
        wifi: '0',
        windows: '1',
        yj_cost: '0.00',
        yj_state: '0'
      },
      {
        acreage: '20.00',
        air_conditioner: '0',
        bathroom: '0',
        bathrooms: '0',
        bed: '0',
        bedtype: '双床',
        book_rules: null,
        breakfast: '1',
        cancel_rules: null,
        classify: '0',
        facilities: 'null',
        floor: '1',
        id: '9',
        img: null,
        is_refund: '0',
        logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Zw088xeJASJESbHcXw9E0AXXeC6xe3.jpg',
        min_num: 0,
        min_price: 2,
        name: '精致双人床',
        people: '2',
        price: '2.00',
        roomType: '0',
        room_desc: null,
        rz_time: '',
        seller_id: '1',
        size: '（1.2*2） 2张',
        sort: '1',
        state: '1',
        total_num: '3',
        uniacid: '4',
        wifi: '0',
        windows: '1',
        yj_cost: '0.00',
        yj_state: '0'
      }
    ]
  }
  return axios.get(`${config.baseURL}api/RoomList?start=${start}&end=${end}&seller_id=${id}`)
}

// 房间详情
export async function RoomDetails(id:any) {
  return {
    code: 200,
    data: {
      acreage: '20.00',
      air_conditioner: '0',
      bathroom: '0',
      bathrooms: '0',
      bed: '0',
      bedtype: '双床',
      book_rules: null,
      breakfast: '1',
      cancel_rules: null,
      classify: '0',
      facilities: 'null',
      floor: '1',
      id: '9',
      introduction: '<p style="color: #666">酒店介绍酒店介绍酒店介绍酒店介绍酒店介绍酒店介绍</p>',
      is_refund: '0',
      logo: 'images/4/2019/06/Q885zAPKM35AP5KpZ58wkIaYkWKFM3.jpg',
      name: '精致标间',
      people: '2',
      policy: '<p style="color: #666">酒店政策酒店政策酒店政策酒店政策酒店政策酒店政策</p>',
      price: 2,
      roomType: '0',
      room_desc: null,
      rule: '不可退订',
      rz_time: '',
      seller_id: '1',
      size: '（1.2*2） 2张',
      sort: '1',
      state: '1',
      total_num: '3',
      uniacid: '4',
      wifi: '0',
      windows: '1',
      yj_cost: '0.00',
      yj_state: '0',
      img: ['https://static.hotel.showboom.cn/images/4/2019/06/cCcNWPc7c7gctSeSvicwEfccCJn313.jpg', 'https://static.hotel.showboom.cn/images/4/2019/06/Q885zAPKM35AP5KpZ58wkIaYkWKFM3.jpg']
    }
  }
  return axios.get(`${config.baseURL}api/RoomDetails?room_id=${id}`)
}
// 订单列表
export async function MyOrder(uniacid:any,userId:any,page:number = 1) {
  return {
    code: 200,
    data: [
      {
        id: '805',
        seller_id: '1',
        room_id: '289',
        user_id: '4913',
        coupons_id: null,
        order_no: '201908261135336712',
        seller_name: '圣美精品酒店2',
        seller_address: '山西省太原市迎泽区柳巷南路86号',
        coordinates: '37.864933,112.567528',
        arrival_time: '1566748800',
        departure_time: '1566835200',
        dd_time: '14:00',
        price: '1.00',
        num: '2',
        days: '1',
        room_type: '标准大床房',
        room_logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Zw088xeJASJESbHcXw9E0AXXeC6xe3.jpg',
        bed_type: null,
        name: 'admin',
        tel: '13231231231',
        status: '1',
        out_trade_no: '14330091021566790533',
        dis_cost: '0.95',
        yj_cost: null,
        yhq_cost: null,
        yyzk_cost: null,
        total_cost: '0.95',
        is_delete: '0',
        time: '1566790533',
        uniacid: '4',
        ytyj_cost: null,
        hb_cost: null,
        hb_id: null,
        from_id: null,
        classify: '1',
        type: '0',
        code: null,
        jj_time: '0',
        voice: '1',
        qr_fromid: '',
        pay_time: '1566790533',
        sale_id: '0',
        company_id: '0',
        is_commission: '2',
        vip_coupon: '0.95',
        size: '1.8*2.0',
        breakfast: '1',
        windows: '1',
        create_time: '1570957400',
        flag: '0'
      },
      {
        id: '805',
        seller_id: '1',
        room_id: '289',
        user_id: '4913',
        coupons_id: null,
        order_no: '201908261135336712',
        seller_name: '圣美精品酒店2',
        seller_address: '山西省太原市迎泽区柳巷南路86号',
        coordinates: '37.864933,112.567528',
        arrival_time: '1566748800',
        departure_time: '1566835200',
        dd_time: '14:00',
        price: '1.00',
        num: '2',
        days: '1',
        goods_info: [{
          goods_addtime: '1569288703',
          goods_attribute: '1',
          goods_classify: '42',
          goods_details: '',
          goods_id: '125',
          goods_img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg',
          goods_is_open: '1',
          goods_name: '芙蓉王',
          goods_price: '3000',
          goods_sort: '1',
          goods_specifications: '20支',
          goods_stock: '100',
          goods_subheading: '香烟',
          goods_unit: '盒',
          goods_volume: '0',
          goodsorder_id: '771',
          id: '803',
          img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg?x-oss-process=image/resize,m_mfit,h_300,w_400',
          name: '芙蓉王',
          number: '2',
          price: '30.00',
          seller_id: '1',
          spec_id: '803',
          total_price: '60.00',
          type: '1',
          uniacid: '4'
        }],
        room_type: '标准大床房',
        room_logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Zw088xeJASJESbHcXw9E0AXXeC6xe3.jpg',
        bed_type: null,
        name: 'admin',
        tel: '13231231231',
        status: '1',
        out_trade_no: '14330091021566790533',
        dis_cost: '0.95',
        yj_cost: null,
        yhq_cost: null,
        yyzk_cost: null,
        total_cost: '0.95',
        is_delete: '0',
        time: '1566790533',
        uniacid: '4',
        ytyj_cost: null,
        hb_cost: null,
        hb_id: null,
        from_id: null,
        classify: '1',
        type: '0',
        code: null,
        jj_time: '0',
        voice: '1',
        qr_fromid: '',
        pay_time: '1566790533',
        sale_id: '0',
        company_id: '0',
        is_commission: '2',
        vip_coupon: '0.95',
        size: '1.8*2.0',
        breakfast: '1',
        windows: '1',
        create_time: '1570704052',
        flag: '1'
      },
      {
        cancel_time: null,
        create_time: '1571022622',
        delete_time: null,
        finish_time: null,
        flag: '3',
        id: '774',
        is_delete: '0',
        order_no: '201910141110227696',
        out_trade_no: '14330091021571022622',
        pay_time: '1571022622',
        price: '56.00',
        refund_time: null,
        reject_time: null,
        room_num: '',
        seller_id: '1',
        send_time: null,
        status: '3',
        tel: '13288474510',
        type: '3',
        uniacid: '4',
        update_time: '2019-10-14 16:20:46.276202',
        user_id: '4913',
        goods_info: [
          {
            goods_addtime: '1560238498',
            goods_attribute: '3',
            goods_classify: '0',
            goods_details: '&lt;ol class=&quot; list-paddingleft-2&quot; style=&quot;list-style-type: decimal;&quot;&gt;&lt;li&gt;&lt;p&gt;此券仅用于圣美精品酒店早餐&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券不可兑换现金，不设找零&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券仅供一人使用，当天有效&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;本酒店拥有最终解释权。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;',
            goods_id: '116',
            goods_img: 'images/4/2019/05/vRJTt131Wm5rk1ZtY3ZjYT3RtYn4Iy.png',
            goods_is_open: '1',
            goods_name: '早餐券',
            goods_price: '2800',
            goods_sort: '1',
            goods_specifications: '单人券',
            goods_stock: '10000',
            goods_subheading: '早餐时间 ： 7：00-9：00',
            goods_unit: '张',
            goods_volume: '1',
            goodsorder_id: '774',
            id: '538',
            img: 'https://static.hotel.showboom.cn/images/4/2019/05/vRJTt131Wm5rk1ZtY3ZjYT3RtYn4Iy.png?x-oss-process=image/resize,m_mfit,h_300,w_400',
            name: '早餐券',
            number: '2',
            price: '28.00',
            seller_id: '1',
            spec_id: '538',
            total_price: '56.00',
            type: '3',
            uniacid: '4'
          }
        ]
      }
    ]
  }
  return axios.get(`${config.baseURL}api/MyOrder?uniacid=${uniacid}&user_id=${userId}&page=${page}`)
}

// 用户信息
export async function getUser() {
  return {
    code: 200,
    data: {
      add_member: '0',
      balance: '0.00',
      bind_tel_at: '2019-09-17 16:38:10',
      commission: '0.00',
      company_id: '1',
      created_at: '2019-07-13 10:09:33',
      discount: null,
      dj_money: '0.00',
      id: '4913',
      img: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqk7zaqpGsU3icq8sGG42QkT0XedHsQqBJPm0gibGQEXlN3A5JfAcXicnhf5rJJzWfuLqxoHFYt6zV0A/132',
      join_time: '1562983773',
      level_id: '0',
      level_name: null,
      name: '꧁꫞꯭陌꯭小꯭江꯭꫞꧂',
      number: '',
      openid: 'oGEXb4ntomSDY3K8o8KoSSUsBE6M',
      sale_id: '1',
      score: '0',
      tel: '13288474512',
      type: '1',
      uniacid: '4',
      unionid: 'opzxIv67nO5k87E-ZwzNFWowOOb8',
      zs_name: '',
    }
  }
  return axios.get(`${config.baseURL}api/getUser`)
}

// 核销权限
export async function Write_off(uniacid:any) {
  return {
    code: 400,
    data: {}
  }
  return axios.get(`${config.baseURL}api/Write_off?uniacid=${uniacid}`)
}
