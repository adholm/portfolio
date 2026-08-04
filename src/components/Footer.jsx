const Footer = () => {
    return (
        <footer className="w-full relative z-10 text-center py-1.5 sm:py-1.5 mt-auto">
        <p className="text-xs text-gray-200/60 font-normal tracking-normal drop-shadow-sm">
        © {new Date().getFullYear()} Adam Holm. All rights reserved.
        </p>
        </footer>
    );
};

export default Footer;
