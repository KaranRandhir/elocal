const SELLERS = {
  errorcode: "000",
  status: "OK",
  message: "Other Seller list found",
  otherSellerList: [
    {
      sellerDetails: {
        id: 12,
        name: "Rajdeep Telecom",
        address:
          "Shop No.3 SR No 34/4 Lata Smruti Lonkar Wasti Keshavnagar Mundhwa",
        area: "Keshavnagar, Mundhwa",
        city: "Pune",
        state: "Maharastra",
        pincode: "411036",
        contact: "8888714442",
        latitude: 26.0,
        longitude: 57.0,
        sellerResources: [
          {
            id: 25,
            resourceType: "image",
            resourceURL:
              "https://nmgprod.s3.amazonaws.com/media/files/cd/5a/cd5a9c7a825309e9e47c88c6da5b9b56/cover_image.jpg.640x360_q85_crop.jpg",
            orderRender: 2,
            sellerid: 12,
          },
          {
            id: 12,
            resourceType: "image",
            resourceURL:
              "https://elocals-products-images.s3.ap-south-1.amazonaws.com/CoverPics/Rajdeep-Telecom.png",
            orderRender: 1,
            sellerid: 12,
          },
        ],
      },
      elocalsPrice: 27856,
      sellerPrice: 29899,
      mrp: 36000,
    },
    {
      sellerDetails: {
        id: 14,
        name: "Raj Electronics",
        address: " 229, Janu Niketan, Pune Solapur Road, Hadapsar, Pune-411028",
        area: "Pune Solapur Road, Hadapsar",
        city: "Pune",
        state: "Maharastra",
        pincode: "411028",
        contact: " 9822212792",
        latitude: 26.0,
        longitude: 57.0,
        sellerResources: [
          {
            id: 21,
            resourceType: "image",
            resourceURL:
              "https://elocals-products-images.s3.ap-south-1.amazonaws.com/CoverPics/Raj-Electronics.png",
            orderRender: 1,
            sellerid: 14,
          },
        ],
      },
      elocalsPrice: 14566,
      sellerPrice: 17599,
      mrp: 36000,
    },
  ],
};

export default SELLERS;