var elements = document.querySelectorAll(".column");
   function listView() {
      Array.from(elements).forEach(item => {
         item.style.max-width = "90%";
      });
      Array.from(document.querySelectorAll(".btn")).forEach((item, index) => {
         if (index === 0) item.classList.add("active");
         else item.classList.remove("active");
      });
   }
   function gridView() {
      Array.from(elements).forEach(item => {
         item.style.width = "60%";
      });
      Array.from(document.querySelectorAll(".btn")).forEach((item, index) => {
         if (index === 1) item.classList.add("active");
         else item.classList.remove("active");
      });
   }