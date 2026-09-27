import { useEffect } from "react";

const BOOKING_URL = "https://www.znanylekarz.pl/gabriela-zieba/fizjoterapeuta/krakow";

export function ZnanyLekarzWidget() {
  useEffect(() => {
    const id = "zl-widget-s";
    if (document.getElementById(id)) return;
    const js = document.createElement("script");
    js.id = id;
    js.src = "//platform.docplanner.com/js/widget.js";
    const fjs = document.getElementsByTagName("script")[0];
    if (fjs?.parentNode) fjs.parentNode.insertBefore(js, fjs);
    else document.body.appendChild(js);
  }, []);

  return (
    <a
      id="zl-url"
      className="zl-url"
      href={BOOKING_URL}
      rel="nofollow"
      data-zlw-doctor="gabriela-zieba"
      data-zlw-type="big_with_calendar"
      data-zlw-opinion="false"
      data-zlw-hide-branding="true"
      data-zlw-saas-only="true"
      data-zlw-a11y-title="Widget umówienia wizyty lekarskiej"
    >
      Umów wizytę
    </a>
  );
}
