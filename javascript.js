let password = document.body.getElementsByClassName("password-blank")[0]

window.addEventListener("load", () => {
  // document.body.style.background = `url("https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=600")`;
  // document.getElementById("verify").addEventListener("click", () => {
  //   if (password.value == "harsh1234") {
  //     const load = (async () => {
  //       const a = await setTimeout(() => {
  //         document.getElementById("password-1").style.display = "none";
  //         document.getElementById("image-loading").style.display = "block";
  //         document.body.style.background = "none";
  //       }, 100);

  //       const show = await setTimeout(() => {
  //         document.getElementById("image-loading").style.display = "none"
  //         document.getElementById("overall-container").style.display = "block"
  //       }, 2000)
  //       if(window.scrollY>=0 && window.scrollY<100){
  //         console.log(window.scrollY)
  //       }
  //     })
  //     load()
  //   }
  //   else {
  //     alert("please try again")
  //   }
  // })
  if (window.scrollY >= 0 && window.scrollY < 100) {
    document.querySelector(".block-1").style.transform = "translateX(0rem)";
    document.querySelector(".block-sub-content").style.transform = "translateX(0rem)";
    document.querySelector(".block-sub-content-2").style.transform = "translateX(0rem)";

    setTimeout(() => {
      let a = document.querySelectorAll(".number1")
      a.forEach(element => {
        element.innerHTML = 0;
        const update = () => {
          let target = Number.parseInt(element.getAttribute("data-target"))
          // console.log(typeof(target))
          let startpoint = Number.parseInt(element.innerHTML)
          let increment = target / 10;
          if (startpoint < target) {
            element.innerHTML = `+${startpoint + increment}`
            setTimeout(update, 100)
          }
        }
        update()
      });
    }, 2100)
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 400 && window.scrollY < 800) {
    let a = document.querySelectorAll(".overall-select")
    let b = document.querySelectorAll(".same-define")
    a.forEach(element => {
      element.style.transform = "translateX(0rem)"
    });

    const each = (async () => {
      const first = await setTimeout(() => {
        b[0].style.transform = "translateX(0rem)";
      }, 4000);
      const second = await setTimeout(() => {
        b[1].style.transform = "translateX(0rem)";
      }, 6000);
      const third = await setTimeout(() => {
        b[2].style.transform = "translateX(0rem)";
      }, 8000)
      first, second, third
    })
    each()
  }
  // else if (window.scrollY > 1546 && window.scrollY < 1700) {
  //   let a = document.querySelectorAll(".overall-select")
  //   a.forEach(element => {
  //     element.style.transform = "translateX(-100rem)"
  //   });
  // }
  else if (window.scrollY > 1900 && window.scrollY < 2100) {
    let b = document.querySelectorAll(".all-plans")
    b.forEach(element => {
      element.style.animation = "visible 4s linear 0s"
      element.style.opacity = "1"
    });
  }
  else if (window.scrollY > 2500) {
    let ta = document.getElementById('makes-circle')
    ta.style.animation = "svg-move 3s linear 0s"
  }
})

// let image=document.querySelectorAll(".review-image")
// const each_image=(async()=>{
//   const firstimage=await setTimeout(() => {
//     image[2].style.animation="upward 3s linear 0s";

//   }, 1000);
//   const secondimage=await setTimeout(() => {
//     image[1].style.animation="upward 3s linear 0s";
//   }, 4000);
//   const thirdimage=await setTimeout(() => {
//     image[0].style.animation="upward 3s linear 0s";
//   }, 7000);
//   console.log(firstimage,secondimage,thirdimage)
// })
// each_image()
let counter = 0
let image = document.querySelectorAll(".review-image")
image.forEach((element, index) => {
  element.style.left = `${index * 100}%`
})
let moveforward = (() => {
  counter++;
})
var movebackward = (() => {
  counter--;
})
let backward = document.getElementById("move-backward")
let forward = document.getElementById("move-forward")
backward.addEventListener("click", () => {
  movebackward();
  if (counter == -3) {
    counter = 0
    image.forEach((element) => {
      element.style.transform = `translateX(${counter * 100}%)`
    })
  }
  else {
    image.forEach((element, index) => {
      element.style.transform = `translateX(${counter * 100}%)`

    })
  }
})
forward.addEventListener("click", () => {
  moveforward();
  if (counter ==1) {
    counter=-2
    image.forEach((element) => {
      element.style.transform = `translateX(${counter * 100}%)`
    })
  }
  else{
  image.forEach((element, index) => {
    element.style.transform = `translateX(${counter * 100}%)`

  })
}
})
let count = 0;

let movefor = (() => {
  count++;
})
var moveback = (() => {
  count--;
})
let content = document.querySelectorAll(".review-content-1")
content.forEach((element, index) => {
  element.style.left = `${index * 100}%`
});

backward.addEventListener("click", () => {
  moveback()
  if (count == -3) {
    count = 0
    content.forEach((element) => {
      element.style.transform = `translateX(${count * 100}%)`
    })
  }
  else {
    content.forEach((element) => {
      element.style.transform = `translateX(${count * 100}%)`
    })
  }
})
forward.addEventListener("click", () => {
  movefor();
  if(count==1){
    count=-2
    content.forEach((element)=>{
      element.style.transform = `translateX(${count * 100}%)`
    })
  }
  else{
  content.forEach((element, index) => {
    element.style.transform = `translateX(${count * 100}%)`
  })
}
})

// let navbar=document.getElementById("navbar-components-2")
// let home=document.getElementById("home")

// if(window.innerWidth<1200){
//   navbar.innerHTML=`<i class="fa-sharp fa-solid fa-bars" id="icon-1"></i>`
//   let icon=document.getElementById("icon-1")
// icon.addEventListener("click",()=>{
//   let div=document.createElement("div")
//   div.classList.add("box-1")
//   div.innerHTML=`<li><a href="#home">Home</a></li>
//   <li><a href="#plans">Plans</a></li>
//   <li><a href="#whyus">Why US</a></li>`
//   home.prepend(div)
// })
// }
// else if(window.innerWidth>1200){
//   navbar.innerHTML=` <a href="#home">Home</a>
//   <a href="#programs">Programs</a>
//   <a href="#whyus">Why Us</a>
//   <a href="#plans">Plans</a>
//   <a href="#Testimonials">Testimonials</a>`
// }