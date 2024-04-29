import "./NewListing.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
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
    condition: "",
    shipping: 0.0,
    ships_from: "",
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
    condition,
    shipping,
    ships_from,
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
      data.append("uuid", image);
      data.append("image", imageFile);
      console.log(data);
      axios
        .post(IMAGE_API_URL, data)
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
    }
    console.log(imagePrev);
    console.log("imageId: " + imageId);

    console.log(listingData);

    dispatch(createListing(listingData));

    console.log("listing made!");
    document.getElementById("nl-file-btn").value = "";
    setListingData({
      image: "",
      title: "",
      price: 0.0,
      stock: 0,
      num_sold: 0,
      rating: 0.0,
      condition: "",
      shipping: 0.0,
      ships_from: "",
      category: "",
      group: "",
      description: "",
      favorites: 0,
    });
  };

  const onChange = (e) => {
    if (e.target.name === "imageFile") {
      if (e.target.files.length > 0) {
        setListingData((prevState) => ({
          ...prevState,
          image: uuidv4() + "." + e.target.files[0].name.split(".")[1],
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
          <label for="stock">Stock</label>
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
          <label for="condition">Condition</label>
          <br></br>
          {/* <input
            className="nl-inp-box"
            type="number"
            name="condition"
            value={condition}
            onChange={onChange}
            placeholder="New"
          ></input> */}
          <select
            value={condition}
            onChange={onChange}
            className="nl-sl-box"
            name="condition"
          >
            <option selected disabled value="">
              Choose condition
            </option>
            <option value="New">New</option>
            <option value="Used - Like New">Used - Like New</option>
            <option value="Used - Very Good">Used - Very Good</option>
            <option value="Used - Good">Used - Good</option>
            <option value="Used - Acceptable">Used - Acceptable</option>
          </select>
          <br></br>
          <label for="shipping">Shipping</label>
          <br></br>
          <input
            className="nl-inp-box"
            type="number"
            name="shipping"
            value={shipping}
            onChange={onChange}
            placeholder="1"
          ></input>
          <br></br>
          <label for="ships_from">Ships from</label>
          <br></br>
          <select
            value={ships_from}
            onChange={onChange}
            className="nl-sl-box"
            name="ships_from"
            // required
          >
            <option selected disabled value="">
              Choose state
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <br></br>
          <label for="category">Category</label>
          <br></br>
          <select
            value={category}
            onChange={onChange}
            className="nl-sl-box"
            name="category"
          >
            <option selected disabled value="">
              Choose category
            </option>
            <option value="Photocards">Photocards</option>
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
      <FooterComponent></FooterComponent>
    </body>
  );
}

export default NewListing;
