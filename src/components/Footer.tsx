import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "../constants/icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="bg-brunswick-green text-white py-8 sm:py-10 border-t border-white/20 pb-safe-ios"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Location */}
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-black text-xl text-white">
                smg-dev
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-fern-green text-white border border-white/20 shadow-xs">
                Full-Stack
              </span>
            </div>
            <p className="text-xs font-semibold text-white/90 flex items-center justify-center md:justify-start gap-1.5 mt-1">
              <FaMapMarkerAlt size={12} className="text-sage" />
              <span>{t("footer.location")}</span>
            </p>
          </div>

          {/* Quick Contact Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:smanjon2021@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-fern-green text-xs sm:text-sm font-semibold text-white transition-all border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green shadow-xs"
              aria-label="Send email to Sergio Manjón"
            >
              <FaEnvelope size={14} className="text-sage" />
              <span>smanjon2021@gmail.com</span>
            </a>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/SMG-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green rounded-full p-1"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/smg-web-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern-green rounded-full p-1"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            <p className="text-xs font-semibold text-white/80">
              &copy; {new Date().getFullYear()} Sergio Manjón (smg-dev).{" "}
              {t("footer.allRightsReserved")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
