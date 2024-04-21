import "./NewListing.css";
import HeaderComponent from "../components/HeaderComponent";

function NewListing() {
  return (
    <body>
      <HeaderComponent></HeaderComponent>
      <h1 className="h-tag">New Listing</h1>

      <div>
        <form>
          {/* <label className="h-tag">Photo</label>
          <br></br>
          <input className="nl-file-btn" type="file"></input>
          <br></br> */}
          <label for="title">Name</label>
          <br></br>
          <input
            className="nl-inp-box"
            type="text"
            name="title"
            placeholder="Love Yourself: Tear Version U SUGA Photocard"
          ></input>
          <br></br>
          <label for="price">Price</label>
          <br></br>
          <input
            className="nl-inp-box"
            type="number"
            name="price"
            placeholder="12.99"
          ></input>
          <br></br>
          <label for="price">Stock</label>
          <br></br>
          <input
            className="nl-inp-box"
            type="number"
            name="stock"
            placeholder="1"
          ></input>
          <br></br>
          <label for="category">Category</label>
          <br></br>
          <select className="nl-sl-box" name="category">
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
