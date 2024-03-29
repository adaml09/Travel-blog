$(document).ready(function () {
    console.log("jQuery is running!");
    // Injecting an H1 header into the header HTML element with an id of "header"
    $("#header").html("<h1>Welcome to our Travel Blog!</h1>");
    $("#footer").html(`<p>
        My favourite city is Montreal, it absoultly beatuiful in both architecture and culture. There
        is always tons do, as well as great food.
    </p>`)
  
    // Create Navigation Bar
    const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
    let navContent = "<ul>";
    $.each(categories, function (index, category) {
      // console.log(index);
      // console.log(category);
      navContent += `<li onclick="loadCategoryContent('${category}')">${category}</li>`;
    });
    navContent += "</ul>";
    $("#navbar").html(navContent);
  
    window.loadCategoryContent = function (category) {
      console.log("loadCategoryContent function ran!");
      console.log(category);
      let content = `<h2>${category}</h2>`;
      content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`;
      $("#content").html(content);
  
      populateCarousel(category.toLowerCase());
    };
  
    const categoryImages = {
      beaches: [
        { alt: "Beach Sunset", src: "./images/beach1.jpg" },
        { alt: "Sandy Shore", src: "./images/beach2.jpg" },
        { alt: "Marina Resort", src: "./images/beach3.jpg" },
      ],
      mountains: [
        { alt: "Mountain Range", src: "./images/mountain1.jpg" },
        { alt: "Snowy Peak", src: "./images/mountain2.jpg" },
        { alt: "Hiking Trail", src: "./images/mountain3.jpg" },
      ],
      cities: [
        { alt: "Montreal", src: "city1.jpg" },
        { alt: "Boston", src: "city2.jpg" },
        { alt: "Calgary", src: "city3.jpg" },
      ],
      forests: [
        { alt: "Forest Sunset", src: "./images/forest1.jpg" },
        { alt: "Birch Forest", src: "./images/forest2.jpg" },
        { alt: "Taiga Forrest", src: "./images/forest3.jpg" },
      ],
      deserts: [
        { alt: "Desert Sunset", src: "./images/desert1.jpg" },
        { alt: "Desert village", src: "./images/forest2.jpg" },
        { alt: "Cactus", src: "./images/forest3.jpg" },
      ],
    };
    // category = beaches
    function populateCarousel(category) {
      console.log("populate carousel ran!");
      const images = categoryImages[category];
  
      // [].forEach(), [].map() -> 2 Array Iterator Method
      let carouselContent = images
        .map((image, index) => {
          return `
          <div class="carousel-item ${index == 0 ? "active" : ""}">
            <div class="image" style="background-image: url('${image.src}')">
            </div>
            <p>${image.alt}</p>
          </div>
          `;
        })
        .join("");
  
      $(`#${category}-carousel`).html(carouselContent);
        
      $(`#${category}-carousel`).append(`
      <button class="carousel-control prev" onclick="moveCarousel('${category}', -1)">&lt;</button>
      <button class="carousel-control next" onclick="moveCarousel('${category}', 1)">&gt;</button>
      `);
      
    }
  
    window.moveCarousel = function (category, direction) {
      debugger;
      let items = $(`#${category}-carousel .carousel-item`);
  
      let activeIndex = items.index(items.filter(".active"));
  
      let newIndex = activeIndex + direction;
  
      if (newIndex >= items.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = items.length - 1;
      }
      items.removeClass("active");
      items.eq(newIndex).addClass("active");
    };
  });
  
  // ICE 5 Tasks:
  // 1.Populate Cities, Forests & Deserts
  // 2. Add 3 images to the Cities & Deserts (Optionally, you may add images for the rest of the categories)
  // 3. Dynamically add content to the Footer using jQuery. The content should include a short description of your favorite category/place and why.
  
  // DUE Monday February 19th at 11:59 PM