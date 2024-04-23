import "./NewListing.css";
import HeaderComponent from "../components/HeaderComponent";
import { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createListing } from "../features/listing/listingSlice";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function NewListing() {
  const dispatch = useDispatch();
  const IMAGE_API_URL = "http://localhost:5000/api/upload/";
  const [imageFile, setImageFile] = useState([]);
  let imageId = "";
  const [imagePrev, setImagePrev] = useState({});

  const [listingData, setListingData] = useState({
    image: "",
    title: "",
    price: 0.0,
    stock: 0,
    num_sold: 0,
    rating: 0.0,
    category: "",
    group: "",
    description: "",
    favorites: 0,
  });

  const {
    image,
    title,
    price,
    stock,
    num_sold,
    rating,
    category,
    group,
    description,
    favorites,
  } = listingData;

  const onSubmit = (e) => {
    e.preventDefault();

    // let imageFile = image;

    if (imageFile) {
      console.log("inside imageFile...");
      let data = new FormData();
      data.append("image", imageFile);
      console.log(data);
      axios
        .post(IMAGE_API_URL, data)
        .then((response) => console.log(response.data._id));
      // .catch((error) => console.error(error));
    }
    console.log(imagePrev);
    console.log("imageId: " + imageId);
    // setListingData((prevState) => ({
    //   ...prevState,
    //   image: "" + imagePrev._id,
    //   // console.log("rhis worked")
    // }));
    console.log(listingData);

    dispatch(createListing(listingData));
    console.log("listing made!");
  };

  const onChange = (e) => {
    if (e.target.name === "imageFile") {
      if (e.target.files.length > 0) {
        setListingData((prevState) => ({
          ...prevState,
          image: e.target.files[0].name,
          // console.log("rhis worked")
        }));
        setImageFile(e.target.files[0]);
        // setImagePrev(URL.createObjectURL(e.target.files[0]));
        // console.log("" + imagePrev);
        console.log("" + image);
        // console.log(typeof image);
        console.log(imageFile);
      }
    } else {
      setListingData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // const onImageChange = e;

  return (
    <body id="list-form-body">
      <HeaderComponent></HeaderComponent>
      <h1 className="h-tag">New Listing</h1>

      <div>
        <form onSubmit={onSubmit}>
          <label for="imageFile" className="h-tag">
            Photo
          </label>
          <br></br>
          <input
            name="imageFile"
            id="nl-file-btn"
            type="file"
            onChange={onChange}
            accept="image/png, image/jpeg"
          ></input>
          {/* <image src={imagePrev}></image> */}
          <br></br>
          <label for="title">Name</label>
          <br></br>
          <input
            className="nl-inp-box"
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="Love Yourself: Tear Version U SUGA Photocard"
          ></input>
          <br></br>
          <label for="price">Price</label>
          <br></br>
          <input
            className="nl-inp-box"
            type="number"
            name="price"
            value={price}
            onChange={onChange}
            placeholder="12.99"
          ></input>
          <br></br>
          <label for="price">Stock</label>
          <br></br>
          <input
            className="nl-inp-box"
            type="number"
            name="stock"
            value={stock}
            onChange={onChange}
            placeholder="1"
          ></input>
          <br></br>
          <label for="category">Category</label>
          <br></br>
          <select
            value={category}
            onChange={onChange}
            className="nl-sl-box"
            name="category"
          >
            <option selected value="Photocards">
              Photocards
            </option>
            <option value="Photocard holders">Photocard holders</option>
            <option value="Photocard sleeves">Photocard sleeves</option>
            <option value="Binders/collect books">
              Binders or collect books
            </option>
            <option value="Toploaders">Toploaders</option>
          </select>
          <br></br>
          <label for="group">Group</label>
          <br></br>
          <input
            className="nl-inp-box"
            type="text"
            name="group"
            value={group}
            onChange={onChange}
            placeholder="BTS"
          ></input>
          <br></br>
          <label for="description">Description</label>
          <br></br>
          <textarea
            id="nl-desc-box"
            name="description"
            cols="50"
            rows="10"
            value={description}
            onChange={onChange}
            placeholder="ex: brand new photocard in mint condition, comes triple-sleeved with free toploader"
          ></textarea>
          <br></br>
          <input type="submit" id="frm-sbm-btn"></input>
        </form>
      </div>
    </body>
  );
}

export default NewListing;
