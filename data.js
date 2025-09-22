var APP_DATA = {
  "scenes": [
    {
      "id": "0-bn-ngoi-ca-hng-x-light",
      "name": "BÊN NGOÀI CỬA HÀNG X-LIGHT",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.005534865005198952,
        "pitch": -0.16076083268147556,
        "fov": 1.3760361749759162
      },
      "linkHotspots": [
        {
          "yaw": -0.19684342391511755,
          "pitch": 0.18246307575344112,
          "rotation": 0,
          "target": "1-bn-trong-ca-hng-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bn-trong-ca-hng-",
      "name": "BÊN TRONG CỬA HÀNG ",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.0003041790101629971,
        "pitch": -0.1434062437420991,
        "fov": 1.3760361749759162
      },
      "linkHotspots": [
        {
          "yaw": -0.02219799991851268,
          "pitch": 0.2841118779257368,
          "rotation": 0,
          "target": "2-phng-thi-cng"
        },
        {
          "yaw": 0.7620603966490584,
          "pitch": 0.1940569324239938,
          "rotation": 0,
          "target": "3-phng-khch"
        },
        {
          "yaw": 3.1361525574022266,
          "pitch": 0.38103508958203847,
          "rotation": 0,
          "target": "0-bn-ngoi-ca-hng-x-light"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-phng-thi-cng",
      "name": "PHÒNG THI CÔNG",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2825795693747537,
          "pitch": 0.39762934929680327,
          "rotation": 0,
          "target": "3-phng-khch"
        },
        {
          "yaw": -3.1286771628836973,
          "pitch": 0.4102260072333337,
          "rotation": 0,
          "target": "1-bn-trong-ca-hng-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-phng-khch",
      "name": "PHÒNG KHÁCH",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4684414967766521,
          "pitch": 0.3499426724351302,
          "rotation": 0,
          "target": "2-phng-thi-cng"
        },
        {
          "yaw": 0.33613766659505373,
          "pitch": 0.33420769341485723,
          "rotation": 0,
          "target": "4-phng-khch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-phng-khch",
      "name": "PHÒNG KHÁCH",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.00855477482017264,
        "pitch": 0.011482916620103367,
        "fov": 1.3760361749759162
      },
      "linkHotspots": [
        {
          "yaw": -2.5833549238942872,
          "pitch": 0.5499696516852239,
          "rotation": 0,
          "target": "3-phng-khch"
        },
        {
          "yaw": -2.4383291369034037,
          "pitch": 0.26985248490681535,
          "rotation": 0,
          "target": "2-phng-thi-cng"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "X-LIGHT WORK SHOP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
