import Link from "next/link";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import cookieCutter from "cookie-cutter";

const Nav = ({ username = "%username%" }) => {
  const router = useRouter();

  const Logout = () => {
    cookieCutter.set("user", JSON.stringify(""), { expires: new Date(0) });
    router.push("/login");
  };

  return (
    <motion.div
      initial={{
        filter: "none",
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        filter: "none",
        transition: { duration: 0.8 },
      }}
      className="navBar"
    >
      <ul className="navList">
        <motion.li
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 1,
            transition: { duration: 0.1 },
          }}
          className="navItems"
        >
          <Link href={"/"}>
            <FaRobot size={36} color="whitesmoke" />
          </Link>
        </motion.li>
        <li className="navItems dropdown">
          <motion.p
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 1,
              transition: { duration: 0.1 },
            }}
          >
            {username}{" "}
          </motion.p>

          <div className="dropdown-content-wrapper">
            <div className="dropdown-content">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{
                  scale: 1,
                  transition: { duration: 0.1 },
                }}
              >
                <Link href={"/userdetails"}>User Details</Link>
              </motion.p>
              <motion.p
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{
                  scale: 1,
                  transition: { duration: 0.1 },
                }}
              >
                <Link href={"/additionaldetails"}>Pridict</Link>
              </motion.p>
              <motion.p
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{
                  scale: 1,
                  transition: { duration: 0.1 },
                }}
                onClick={Logout}
              >
                Logout
              </motion.p>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default Nav;
