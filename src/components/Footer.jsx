export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 md:pt-20 pb-8" id="footer">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Divider line above columns */}
        <div className="h-[1px] bg-charcoal-light mb-12 md:mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10 mb-14">
          {/* Company */}
          <div>
            <h4 className="text-[14px] font-bold mb-6 text-white tracking-wide uppercase font-sans">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Features', 'Works', 'Career', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="link-underline text-gray-400 text-[14px] hover:text-purple transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Policies */}
          <div>
            <h4 className="text-[14px] font-bold mb-6 text-white tracking-wide uppercase font-sans">
              Terms & Policies
            </h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="link-underline text-gray-400 text-[14px] hover:text-purple transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[14px] font-bold mb-6 text-white tracking-wide uppercase font-sans">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Instagram', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                )},
                { name: 'Twitter', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                )},
                { name: 'Facebook', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                )},
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-gray-400 text-[14px] hover:text-purple transition-colors duration-300 group"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-bold mb-6 text-white tracking-wide uppercase font-sans">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-[14px] leading-relaxed">
                Little Elementum 407,
                <br />
                Summerhill, NY
              </li>
              <li className="text-gray-400 text-[14px]">(01) 528-0501</li>
              <li>
                <a
                  href="mailto:info@elementum.com"
                  className="link-underline text-gray-400 text-[14px] hover:text-purple transition-colors duration-300"
                >
                  info@elementum.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-charcoal-light pt-8">
          <p className="text-gray-500 text-[12px] text-center">
            www.elementum.co.in&ensp;•&ensp;© {new Date().getFullYear()} Elementum.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
