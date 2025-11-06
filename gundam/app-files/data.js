var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "大門",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1408,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.7804588705275677,
          "pitch": 0.1297822035434706,
          "rotation": 5.497787143782138,
          "target": "1-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1251501344185897,
          "pitch": -0.14572427050427805,
          "title": "鋼彈工廠",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-2",
      "name": "大門2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1408,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7026370446715511,
          "pitch": 0.14058674168713736,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -2.5970868968550143,
          "pitch": 0.29950501442398547,
          "rotation": 0,
          "target": "2-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1",
      "name": "大門1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1408,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7595521776647214,
          "pitch": 0.008955723527211745,
          "rotation": 10.995574287564278,
          "target": "1-2"
        },
        {
          "yaw": -0.027032617845982543,
          "pitch": 0.011839884326354522,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "通道",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9777724949443076,
          "pitch": 0.23231552410111078,
          "rotation": 0,
          "target": "2-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gundam",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
