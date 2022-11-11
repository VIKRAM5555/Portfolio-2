import { Grid, Box, Typography } from "@mui/material/";
import { Button } from "@mui/material/";
import { motion } from "framer-motion";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { FaNode } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiNetlify,
  SiMongodb,
  SiJavascript,
  SiCsswizardry,
  SiHtml5,
} from "react-icons/si";
import { useState } from "react";
import { width } from "@mui/system";
export function Project() {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState([null]);
  return (
    <Grid
      className="LetterMotion"
      display="flex"
      flexDirection="row"
      padding="23px"
      margin="-60px"
      marginLeft="-5px"
      marginBottom="-5px"
      marginTop="-30px"
      container
    >
      <motion.p
        initial={{ y: -1600 }}
        animate={{ y: 2 }}
        transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 50 }}
      >
        <Grid item md={12} xs={6} width="100vw">
          <Button startIcon={<AppsIcon />} class="button-75" role="button">
            <span class="text">Project Done</span>
          </Button>
        </Grid>
      </motion.p>

      <motion.p
        initial={{ x: -1600 }}
        animate={{ x: -2 }}
        transition={{ duration: 1, delay: 2, type: "spring", stiffness: 50 }}
      >
        <Grid
          className="GridItem"
          id="1"
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3933020/pexels-photo-3933020.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "contain",
          }}
          margin={"10px"}
          width="30vw"
          height="20vh"
          display="flex"
          item
          md={12}
          onMouseOver={(e) => setIsShown([e.target.id])}
          onMouseLeave={(e) => setIsShown([null])}
        >
          <Button
            startIcon={<GitHubIcon />}
            target="_blank"
            class="button-75"
            role="button"
            href="https://github.com/VIKRAM5555/HallbOOKING"
          ></Button>

          <Button class="button-75" role="button">
            <span class="text">Hall Booking App</span>
          </Button>

          <Button
            startIcon={<SiNetlify />}
            class="button-75"
            role="button"
            href="https://magenta-bubblegum-8bcbc0.netlify.app"
            target="_blank"
          ></Button>
          {isShown[0] === "1" && (
            <h6
              style={{
                height: "10vh",
                width: "10vw",
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                margin: "4px",
                marginTop: "40px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              Used Stack
            </h6>
          )}
          {isShown[0] == "1" && (
            <Grid
              sx={{
                height: "20vh",
                width: "30vw",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              <RiReactjsLine size={30} />
              <FaNode size={30} />
              <SiMongodb size={30} />
            </Grid>
          )}
        </Grid>
      </motion.p>

      <motion.p
        initial={{ x: 1600 }}
        animate={{ x: 2 }}
        transition={{ duration: 1.5, delay: 3, type: "spring", stiffness: 50 }}
      >
        <Grid
          className="GridItem"
          id="2"
          spacing={"10"}
          margin={"10px"}
          gap="-10"
          width="27vw"
          height="20vh"
          item
          md={12}
          onMouseOver={(e) => setIsShown([e.target.id])}
          onMouseLeave={(e) => setIsShown([null])}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "contain",
          }}
        >
          <Button
            startIcon={<GitHubIcon />}
            target="_blank"
            class="button-75"
            role="button"
            href="https://github.com/VIKRAM5555/spotifyreact"
          ></Button>
          <Button class="button-75" role="button">
            <span class="text">Music App</span>
          </Button>
          <Button
            startIcon={<SiNetlify />}
            class="button-75"
            role="button"
            href="https://warm-tapioca-6caa21.netlify.app"
            target="_blank"
          ></Button>
          {isShown[0] == "2" && (
            <h6
              style={{
                height: "10vh",
                width: "10vw",
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                margin: "4px",
                marginTop: "40px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              Used Stack
            </h6>
          )}
          {isShown[0] == "2" && (
            <Grid
              sx={{
                height: "20vh",
                width: "30vw",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              <RiReactjsLine size={30} />
              <FaNode size={30} />
              <SiMongodb size={30} />
            </Grid>
          )}
        </Grid>
      </motion.p>

      <motion.p
        initial={{ y: 1600 }}
        animate={{ y: 2 }}
        transition={{ duration: 2, delay: 4, type: "spring", stiffness: 50 }}
      >
        <Grid
          className="GridItem"
          id="3"
          margin={"10px"}
          width="29vw"
          height="20vh"
          item
          md={11}
          onMouseOver={(e) => setIsShown([e.target.id])}
          onMouseLeave={(e) => setIsShown([null])}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/9316996/pexels-photo-9316996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "contain",
          }}
        >
          <Button
            startIcon={<GitHubIcon />}
            target="_blank"
            class="button-75"
            role="button"
            href="https://github.com/VIKRAM5555/b30wd/tree/master/src"
          ></Button>
          <Button class="button-75" role="button">
            <span class="text">Image List</span>
          </Button>
          <Button
            startIcon={<SiNetlify />}
            class="button-75"
            role="button"
            href="https://objective-shaw-0fb75e.netlify.app"
            target="_blank"
          ></Button>

          {isShown[0] == "3" && (
            <h6
              style={{
                height: "10vh",
                width: "10vw",
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                margin: "4px",
                marginTop: "40px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "forestgreen",
                borderRadius: "10px",
              }}
            >
              Used Stack
            </h6>
          )}
          {isShown[0] == "3" && (
            <Grid
              sx={{
                height: "20vh",
                width: "30vw",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "forestgreen",
                borderRadius: "10px",
              }}
            >
              <SiJavascript size={20} />
              <SiCsswizardry size={20} />
              <SiHtml5 size={20} />
            </Grid>
          )}
        </Grid>
      </motion.p>

      <motion.p
        initial={{ y: -1600 }}
        animate={{ y: -2 }}
        transition={{ duration: 2.5, delay: 5, type: "spring", stiffness: 50 }}
      >
        <Grid
          className="GridItem"
          id="4"
          margin={"10px"}
          width="30vw"
          height="20vh"
          item
          onMouseOver={(e) => setIsShown([e.target.id])}
          onMouseLeave={(e) => setIsShown([null])}
          md={11}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "contain",
          }}
        >
          <Button
            startIcon={<GitHubIcon />}
            target="_blank"
            class="button-75"
            role="button"
            href="https://github.com/VIKRAM5555/book-my-show"
          ></Button>
          <Button class="button-75" role="button">
            Ticket Booking App
          </Button>
          <Button
            startIcon={<SiNetlify />}
            class="button-75"
            role="button"
            href="https://preeminent-pasca-2e77b8.netlify.app"
            target="_blank"
          ></Button>
          {isShown[0] == "4" && (
            <h6
              style={{
                height: "10vh",
                width: "10vw",
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                margin: "4px",
                marginTop: "40px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              Used Stack
            </h6>
          )}
          {isShown[0] == "4" && (
            <Grid
              sx={{
                height: "20vh",
                width: "30vw",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              <RiReactjsLine size={30} />
              <FaNode size={30} />
              <SiMongodb size={30} />
            </Grid>
          )}
        </Grid>
      </motion.p>
      <motion.p
        initial={{ x: 1600 }}
        animate={{ x: 2 }}
        transition={{ duration: 3, delay: 6, type: "spring", stiffness: 50 }}
      >
        <Grid
          className="GridItem"
          id="5"
          margin={"10px"}
          width="30vw"
          height="20vh"
          onMouseOver={(e) => setIsShown([e.target.id])}
          onMouseLeave={(e) => setIsShown([null])}
          item
          md={11}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "contain",
          }}
        >
          <Button
            startIcon={<GitHubIcon />}
            target="_blank"
            class="button-75"
            role="button"
            href="https://magenta-bubblegum-8bcbc0.netlify.app"
          ></Button>
          <Button class="button-75" role="button">
            <span class="text">Add Recipes</span>
          </Button>
          <Button
            startIcon={<SiNetlify />}
            class="button-75"
            role="button"
            href="https://relaxed-pike-0d96e0.netlify.app"
            target="_blank"
          ></Button>
          {isShown[0] == "5" && (
            <h6
              style={{
                height: "10vh",
                width: "10vw",
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                margin: "4px",
                marginTop: "40px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "forestgreen",
                borderRadius: "10px",
              }}
            >
              Used Stack
            </h6>
          )}
          {isShown[0] == "5" && (
            <Grid
              sx={{
                height: "20vh",
                width: "30vw",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "forestgreen",
                borderRadius: "10px",
              }}
            >
              <SiJavascript size={20} />
              <SiCsswizardry size={20} />
              <SiHtml5 size={20} />
            </Grid>
          )}
        </Grid>
      </motion.p>

      <motion.p
        initial={{ x: -1600 }}
        animate={{ x: -2 }}
        transition={{ duration: 3.5, delay: 7, type: "spring", stiffness: 50 }}
      >
        <Grid
          className="GridItem"
          id="6"
          margin={"10px"}
          width="35vw"
          height="20vh"
          item
          onMouseOver={(e) => setIsShown([e.target.id])}
          onMouseLeave={(e) => setIsShown([null])}
          md={11}
          sx={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_960_720.jpg)",
            backgroundSize: "contain",
          }}
        >
          <Button
            startIcon={<GitHubIcon />}
            target="_blank"
            class="button-75"
            role="button"
            href="https://github.com/VIKRAM5555/Calender-Event"
          ></Button>
          <Button class="button-75" role="button">
            Calender Event
          </Button>
          <Button
            startIcon={<SiNetlify />}
            target="_blank"
            class="button-75"
            role="button"
            href="https://vocal-faloodeh-ba8f7a.netlify.app"
          ></Button>
          {isShown[0] == "6" && (
            <h6
              style={{
                height: "10vh",
                width: "10vw",
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                margin: "4px",
                marginTop: "40px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              Used Stack
            </h6>
          )}
          {isShown[0] == "6" && (
            <Grid
              sx={{
                height: "20vh",
                width: "30vw",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              <RiReactjsLine size={30} />
              <FaNode size={30} />
              <SiMongodb size={30} />
            </Grid>
          )}
        </Grid>
      </motion.p>
      <motion.p
        initial={{ y: 1600 }}
        animate={{ y: 2 }}
        transition={{ duration: 4, delay: 8, type: "spring", stiffness: 50 }}
      >
        <Grid
          className="GridItem"
          margin={"10px"}
          id="7"
          width="38vw"
          height="20vh"
          item
          onMouseOver={(e) => setIsShown([e.target.id])}
          onMouseLeave={(e) => setIsShown([null])}
          md={11}
          sx={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2018/07/23/13/19/mail-3556865_960_720.jpg)",
            backgroundSize: "contain",
          }}
        >
          <Button
            startIcon={<GitHubIcon />}
            target="_blank"
            class="button-75"
            role="button"
            href="https://github.com/VIKRAM5555/chatbox"
          ></Button>
          <Button class="button-75" role="button">
            <span class="text">Chat-Box App</span>
          </Button>
          <Button
            startIcon={<SiNetlify />}
            class="button-75"
            role="button"
            href="https://friendly-bienenstitch-f579fc.netlify.app"
            target="_blank"
          ></Button>
          {isShown[0] == "7" && (
            <h6
              style={{
                height: "10vh",
                width: "10vw",
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                margin: "4px",
                marginTop: "40px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              Used Stack
            </h6>
          )}
          {isShown[0] == "7" && (
            <Grid
              sx={{
                height: "20vh",
                width: "10vw",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "greenyellow",
                borderRadius: "10px",
              }}
            >
              <RiReactjsLine size={30} />
              <FaNode size={30} />
              <SiMongodb size={30} />
            </Grid>
          )}
        </Grid>
      </motion.p>

      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowCircleLeftIcon />}
        role="button"
        class="button-back"
      >
        <span class="text">Back</span>
      </Button>
    </Grid>
  );
}
