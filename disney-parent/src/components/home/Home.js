import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getParentAdds } from "../../actions";
import axios from "axios";

const Home = props => {
  useEffect(() => {
    axios
      .get("")
      .then(res => {
        props.getParentAdds({ ParentAdd: res.data });
      })
      .catch(err => console.log(err));
  });

  const handleClick = e => {
    e.prevetDefault();
    // isLoggedIn ? props.history.push('') : props.history.push('/login')
  };
  return (
    <>
      {props.ParentAdd ? (
        props.ParentAdd.map(add => {
          return (
            <div style={{
                backgroundColor: "whitesmoke",
                width: "40%",
                margin: "0 auto",
                marginTop: "1rem",
                borderRadius: '1rem'
              }} key={add.id}>
              <h1>{add.headline}</h1>
              <h3>
                {add.time} | {add.location}
              </h3>
              <textarea cols='60' rows="10">{add.body}</textarea>
              <p style={{ marginBottom: "2rem" }}>{add.numComments}</p>
              <button style={{ marginBottom: "1rem" }} onClick={handleClick}>Comment</button>
              {/*Does not work if not logged in */}
            </div>
          );
        })
      ) : (
        <div
          style={{
            backgroundColor: "whitesmoke",
            width: "40%",
            margin: "0 auto",
            marginTop: "1rem",
            borderRadius: '1rem'
          }}
        >
          <h1>headline</h1>
          <h3>time | location</h3>
          <textarea cols='60' rows="10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
            viverra nisl. Aliquam lacus ante, suscipit id tincidunt a,
            condimentum in augue. Sed egestas est ac venenatis pretium. Ut
            feugiat condimentum tincidunt. Duis ornare nibh ac erat tincidunt,
            vel hendrerit dolor bibendum. Vivamus molestie efficitur aliquet.
            Nunc porta ut felis sit amet vulputate. Ut pharetra mauris eu dictum
            imperdiet. Sed enim ipsum, condimentum quis elit eget, elementum
            tempor elit. Sed placerat elit odio, vel malesuada nibh bibendum
            eget. Cras condimentum turpis dictum ex tempus imperdiet. Nulla
            consectetur, sapien quis malesuada tempor, mi quam bibendum augue, a
            imperdiet augue mi ut nibh. Etiam vel laoreet odio. Proin congue
            velit nec fermentum finibus. Mauris suscipit odio non facilisis
            condimentum. Vivamus nisi quam, consectetur imperdiet aliquet in,
            efficitur vel turpis. Duis eget posuere est, vel semper magna. Donec
            sed aliquet orci. Fusce interdum mauris at efficitur scelerisque.
            Quisque scelerisque lorem varius urna gravida, in suscipit nisi
            vehicula.
          </textarea>
          <p style={{ marginBottom: "2rem" }}># Comments</p>
          <button style={{ marginBottom: "1rem" }}>Comment</button>
          {/*Does not work if not logged in */}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getParentAdds })(Home);
