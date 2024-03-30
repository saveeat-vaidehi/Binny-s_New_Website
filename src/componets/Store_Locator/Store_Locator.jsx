import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, ThemeProvider } from "react-bootstrap";
import "../../styles/Store.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const StoreLocator = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });
  const [isClicked, setIsClicked] = useState(false);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [isMouseEnteredSurat, setIsMouseEnteredSurat] = useState(false);


  const locations = [
    {
      locationName: "Mumbai",
      url: "./images/Mumbai_Map.png",
      address: `Binny's jewellery boutique,14/A ,Ground Floor, Paper Box, Mahakali Caves Rd, Andheri East, Mumbai, Maharashtra 400093`,
      link: "https://www.google.com/maps/place/Paper+Box+Company+of+India/@19.121398,72.8589272,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9c9de14dcdf:0x26c02236ed2a4817!8m2!3d19.1213929!4d72.8615075!16s%2Fg%2F11fl7n3f_j?entry=ttu",
    },
    {
      locationName: "Surat",
      url: "./images/Surat_Map.png",
      address: `Binny's jewellery Boutique, Opp Science Center, City Light Rd, next to Sarvoday Bank, Surat, Gujarat 395007`,
      link: "https://www.google.com/maps/place/Paper+Box+Company+of+India/@19.121398,72.8589272,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9c9de14dcdf:0x26c02236ed2a4817!8m2!3d19.1213929!4d72.8615075!16s%2Fg%2F11fl7n3f_j?entry=ttu",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [initialAnimation, setInitialAnimation] = useState(true);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };
  
  const handleMouseEnter = (name) => {
    console.log("Mouse entered the image area");
  if (name === 'Mumbai') {
    setIsMouseEntered(true);
    setIsMouseEnteredSurat(false); // Reset Surat state
  } else {
    setIsMouseEnteredSurat(true);
    setIsMouseEntered(false); // Reset Mumbai state
  }
  };

  const handleMouseExit=(name)=>{
    console.log("Mouse exited the image area");
    if (name === 'Mumbai') {
      setIsMouseEntered(false);
    } else {
      setIsMouseEnteredSurat(false);
    }
  }

  const handleClikeImage = (name) => {
    const url_Mumbai = 'https://www.google.com/maps/place/Paper+Box+Company+of+India/@19.1160922,72.8705432,13z/data=!4m6!3m5!1s0x3be7c9c9de14dcdf:0x26c02236ed2a4817!8m2!3d19.1213929!4d72.8615075!16s%2Fg%2F11fl7n3f_j?entry=ttu';
    const url_Surat = 'https://www.google.com/maps/place/Binny%27s+Jewellery+Boutique/@21.1699335,72.7947919,15z/data=!4m6!3m5!1s0x3be04de64d6cfa27:0xbc6124aaa79f0c25!8m2!3d21.1699335!4d72.7947919!16s%2Fg%2F11b72nxzng?entry=ttu';


    if (name === 'Mumbai') {
        console.log("Image clicked!");
        if(isSmallScreen){
            setTimeout(()=>{
                window.open(url_Mumbai, '_blank');
                setIsMouseEntered(false); 
            },[2000])
        }else{
            window.open(url_Mumbai, '_blank');
            setIsMouseEntered(false); 
        }
    } else {
        console.log("Image clicked!");
        if(isSmallScreen){
            setTimeout(()=>{
                window.open(url_Surat, '_blank');
                setIsMouseEnteredSurat(false); 
            },[2000])
        }else{
            window.open(url_Surat, '_blank');
            setIsMouseEnteredSurat(false);
        }
    }
}


  useEffect(() => {
    setInitialAnimation(false);
  }, []);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Container
        fluid
        className="text-light"
        style={{ marginTop: "80px", overflow: "hidden" }}
      >
        {/* <Row className="p-0 m-0">
            <div className="our-store-heading text-center">Our Stores</div>
        </Row> */}
        <Row className="justify-content-start align-items-start">
          {locations.map((location, index) => (
            <Col
              key={index}
              xl={1}
              lg={1}
              md={2}
              sm={2}
              xs={6}
              className="mb-3 mt-3 d-flex justify-content-start align-items-center"
            >
              <div className="d-flex flex-column justify-content-start align-items-start w-100">
                <span
                  variant="outline-dark"
                  className="title w-100"
                  // active={currentIndex === index}
                  onClick={() => handleButtonClick(index)}
                  style={{marginBottom:'-10px'}}
                >
                  {location.locationName}
                </span>
                <div className="w-100">
                  {currentIndex === index && (
                    <motion.svg
                      initial={
                        initialAnimation
                          ? { x: currentIndex === 0 ? "0%" : "0%" }
                          : { x: currentIndex === 0 ? "100%" : "-100%" }
                      }
                      animate={{ x: initialAnimation ? "100%" : "0%" }}
                      // initial={{x: currentIndex === 0 ? "100%" : "-100%"}}
                      // animate={{x:'0%'}}
                      exit={{ x: "100%" }}
                      transition={{ duration: 2 }}
                      width={'100%'}
                      height="5"
                      viewBox={`0 0 ${isSmallScreen ? '20' : '45'} 5`}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
            
                    >
                      <rect width={` ${isSmallScreen ? '20' : '45'}`} height="5" rx="2.5" fill="#D9D9D9" />
                    </motion.svg>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="">
          {currentIndex == 0 && (
            <>
              {!isSmallScreen ? (
                <>
                  <Col className="">
                    <motion.div
                      className="mt-4 address"
                      initial={
                        initialAnimation
                          ? { x: "-100vw" }
                          : { x: currentIndex === 0 ? "0vw" : "0vw" }
                      }
                      animate={
                        initialAnimation
                          ? { x: currentIndex === 0 ? "-100vw" : "0vw" }
                          : { x: "-100vw" }
                      }
                      exit={{ x: "-100px" }}
                      transition={{ duration: 2 }}
                    >
                      {locations[1].address}
                    </motion.div>
                  </Col>

                  <Col>
                    <motion.div
                      className="mt-4 address"
                      initial={
                        initialAnimation
                          ? { x: "-45vw" }
                          : { x: currentIndex === 0 ? "49vw" : "0vw" }
                      }
                      animate={
                        initialAnimation
                          ? { x: currentIndex === 0 ? "-100vw" : "0vw" }
                          : { x: "-49vw" }
                      }
                      exit={{ x: "0px" }}
                      transition={{ duration: 2, stiffness: "0" }}
                    >
                      {locations[0].address}
                    </motion.div>
                  </Col>
                </>
              ) : (
                <>
                  <Col>
                    <motion.div
                      className="mt-4 address"
                      initial={
                        initialAnimation
                          ? { x: "0vw" }
                          : { x: currentIndex === 1 ? "0vw" : "100vw" }
                      }
                      animate={
                        initialAnimation
                          ? { x: currentIndex === 1 ? "100vw" : "100vw" }
                          : { x: "0vw" }
                      }
                      exit={{ x: "100px" }}
                      transition={{ duration: 2 }}
                    >
                      {locations[0].address}
                    </motion.div>
                  </Col>
                </>
              )}
            </>
          )}
          {currentIndex == 1 && (
            <>
              {!isSmallScreen ? (
                <>
                  <Col>
                    <motion.div
                      className="mt-4 address"
                      initial={
                        initialAnimation
                          ? { x: "0vw" }
                          : { x: currentIndex === 1 ? "-100vw" : "100vw" }
                      }
                      animate={
                        initialAnimation
                          ? { x: currentIndex === 0 ? "100vw" : "-100vw" }
                          : { x: "0vw" }
                      }
                      exit={{ x: "0px" }}
                      transition={{ duration: 2 }}
                    >
                      {locations[currentIndex].address}
                    </motion.div>
                  </Col>
                  <Col>
                    <motion.div
                      className="mt-4 address"
                      initial={
                        initialAnimation
                          ? { x: "0vw" }
                          : { x: currentIndex === 1 ? "-55vw" : "0vw" }
                      }
                      animate={
                        initialAnimation
                          ? { x: currentIndex === 1 ? "0vw" : "0vw" }
                          : { x: "50vw" }
                      }
                      exit={{ x: "0px" }}
                      transition={{ duration: 2 }}
                    >
                      {locations[0].address}
                    </motion.div>
                  </Col>
                </>
              ) : (
                <>
                  <Col>
                    <motion.div
                      className="mt-4 address"
                      initial={
                        initialAnimation
                          ? { x: "0vw" }
                          : { x: currentIndex === 1 ? "-100vw" : "100vw" }
                      }
                      animate={
                        initialAnimation
                          ? { x: currentIndex === 0 ? "100vw" : "-100vw" }
                          : { x: "0vw" }
                      }
                      exit={{ x: "0px" }}
                      transition={{ duration: 2 }}
                    >
                      {locations[currentIndex].address}
                    </motion.div>
                  </Col>
                </>
              )}
            </>
          )}
        </Row>

        <Row className="">
          <div style={{ position: "absolute"}}>
            <Row className="">
              <Col>
                <div className="mt-4 position-relative" 
                onMouseEnter={()=>handleMouseEnter("Mumbai")} 
                onMouseLeave={()=>handleMouseExit("Mumbai")}
                onClick={() => handleClikeImage("Mumbai")}
                style={{ backgroundColor: "white" }}
                >
                  <img
                    src={locations[0].url}
                    alt={locations[0].locationName}
                    style={{
                        filter: isMouseEntered ? "blur(3px)" : "none",
                      }}
                    className={
                    `
                    img-fluid 
                    ${isSmallScreen ? "image-dimension-mobile":"image-dimension"} 
                    ${isMouseEntered  ? "image-dimension-mouse-entry":"image-dimension-mouse-exit"}
                    `
                }
                  />
                {isMouseEntered  && <h1 className="position-absolute top-50 start-50 translate-middle clik-to-me">Click To View</h1>}
                </div>
              </Col>
            </Row>
          </div>
          {currentIndex === 0 && (
            <motion.div
              initial={
                initialAnimation
                  ? { x: "-100vw" }
                  : { x: currentIndex === 0 ? "0vw" : "0vw" }
              }
              animate={
                initialAnimation
                  ? { x: currentIndex === 0 ? "-100vw" : "-100vw" }
                  : { x: "-100vw" }
              }
              exit={{ x: "0px" }}
              transition={{ duration: 2 }}
              style={{ position: "relative" }}
            >
              <Row>
                <Col>
                  <div className="mt-4">
                    <img
                      src={locations[1].url}
                      alt={locations[1].locationName}
                      className={`img-fluid ${isSmallScreen ? "image-dimension-mobile":"image-dimension"} `}
                    />
                  </div>
                </Col>
              </Row>
            </motion.div>
          )}

          {currentIndex === 1 && (
            <>
              <motion.div
                initial={
                  initialAnimation
                    ? { x: "0vw" }
                    : { x: currentIndex === 1 ? "-100vw" : "100vw" }
                }
                animate={
                  initialAnimation
                    ? { x: currentIndex === 0 ? "100vw" : "-100vw" }
                    : { x: "0vw" }
                }
                exit={{ x: "0px" }}
                transition={{ duration: 2 }}
                style={{ position: "relative" }}
              >
                <Row>
                  <Col>
                    <div className="mt-4 position-relative"
                    onMouseEnter={()=> handleMouseEnter("Surat")} 
                    onMouseLeave={()=>handleMouseExit("Surat")}
                    onClick={() => handleClikeImage("Surat")}
                    style={{ backgroundColor: "white" }}
                    >
                      <img
                        src={locations[currentIndex].url}
                        alt={locations[currentIndex].locationName}style={{
                            filter: isMouseEnteredSurat ? "blur(3px)" : "none",
                          }}
                        className={
                        `
                        img-fluid 
                        ${isSmallScreen ? "image-dimension-mobile":"image-dimension"} 
                        ${isMouseEnteredSurat  ? "image-dimension-mouse-entry":"image-dimension-mouse-exit"}
                        `}

                      />
                {isMouseEnteredSurat  && <h1 className="position-absolute top-50 start-50 translate-middle clik-to-me">Click To View</h1>}

                    </div>
                  </Col>
                </Row>
              </motion.div>
            </>
          )}
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default StoreLocator;
