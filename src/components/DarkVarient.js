import React from "react";

import {
  CCard,
  CCardBody,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
} from "@coreui/react";

const CorouselDarkVarient = (props) => {
  const { items } = props;
  return (
    <div>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CCarousel controls indicators dark>
              {items.map((item, index) => (
                <CCarouselItem key={index}>
                  <div style={{ height: "500px" }}>
                    <img
                      className="d-block w-100"
                      src={item.imageUrl}
                      alt={item.name}
                    />
                  </div>

                  <CCarouselCaption className="d-none d-md-block">
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,0.4)",
                        color: "white",
                      }}
                    >
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                    </div>
                  </CCarouselCaption>
                </CCarouselItem>
              ))}
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  );
};

export default CorouselDarkVarient;
