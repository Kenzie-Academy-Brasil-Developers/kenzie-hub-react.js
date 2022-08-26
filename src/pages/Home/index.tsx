import { Main } from "../../components/User/style.User";
import User from "../../components/User/index";
import { motion } from "framer-motion";
import React from "react";

const Home = () => (
  <Main>
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <User />
    </motion.div>
  </Main>
);
export default Home;