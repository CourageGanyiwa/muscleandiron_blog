import React from "react";
import logo from "../assets/logo.png";
import whatsapp_logo from "../assets/whatsapp-icon.png";
import coresupplements_logo from "../assets/coresupplements_logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
        <div className="max-w-96">
          <a
            href="https://muscleandiron.fitness"
            w
            className="flex items-center gap-2"
          >
            <img src={logo} className="h-10 w-10 rounded" />
          </a>
          <p className="mt-6 text-sm text-gray-500">
            MuscleAndIron, Fitness made simple. Workouts, tips & inspiration for
            real results. Join the journey, get stronger.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <a href="#">
              <FaFacebookF className="text-black" />
            </a>
            <a href="https://coresupplements.online">
              <img
                src={coresupplements_logo}
                alt="Coresupplements Logo"
                className="w-10 h-10"
              />
            </a>
            <a href="https://chat.whatsapp.com/H0gEL7aHACyEipBc03AVt3">
              <img src={whatsapp_logo} className="w-5 h-5" alt="WhatsApp" />
            </a>
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
            <ul className="text-sm text-gray-500 space-y-2 list-none">
              <li>
                <a href="#">Workout Plans</a>
              </li>
              <li>
                <a href="#">Meal Plans</a>
              </li>
              <li>
                <a href="#">Fitness Lifestyle</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
            <div className="text-sm text-gray-500 space-y-2 list-none">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        Copyright {new Date().getFullYear()} ©{" "}
        <a href="https://www.muscleandiron.fitness">MuscleandIron</a>. All Right
        Reserved.
      </p>
    </footer>
  );
}
