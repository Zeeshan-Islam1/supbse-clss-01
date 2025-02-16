import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const api_URL = 'https://vkeulypkeyxhadkvpuho.supabase.co'
const api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZXVseXBrZXl4aGFka3ZwdWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0ODg1NDksImV4cCI6MjA1MjA2NDU0OX0.ONKX_wlKnDGzHrFfmthPMzszIrT2hvdQQZR6kS6jngQ'
const supabase = createClient(api_URL, api_key)

// console.log('Supabase Instance: ', supabase)



const signUp = document.getElementById("signup")
if (signUp) 
signUp.addEventListener("click", async () => {
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const name = document.getElementById('name')
  if (!email.value || !name.value || !password.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Fields',
      text: 'Please fill in both email, name and password.',
      background: '#fff3cd',
      color: '#856404',
      confirmButtonColor: '#f39c12',
      iconColor: '#856404',
      customClass: {
          popup: 'my-popup-class',
          title: 'my-title-class',
          content: 'my-content-class',
          confirmButton: 'my-confirm-button'
      }
  });
    return
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: JSON.stringify(error),
        background: '#f8d7da',
        color: '#721c24',
        confirmButtonColor: '#dc3545',
        iconColor: '#721c24',
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            content: 'my-content-class',
            confirmButton: 'my-confirm-button'
        }
    });
    } else {
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        title: 'New user created!',
        text: JSON.stringify(data.email),
        background: 'black',
        color: 'white',
        confirmButtonColor: 'white',
        iconColor: 'white',
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            content: 'my-content-class',
        }
    });
    }

    email.value = ''
    password.value = ''
    name.value = ''
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'An unexpected error occurred.',
      background: '#f8d7da',
      color: '#721c24',
      confirmButtonColor: '#dc3545',
      iconColor: '#721c24',
      customClass: {
          popup: 'my-popup-class',
          title: 'my-title-class',
          content: 'my-content-class',
          confirmButton: 'my-confirm-button'
      }
  });
  }
})


 
  const login =document.getElementById("login")
  
  if (login)
  login.addEventListener("click" , async()=> {
    const login_email = document.getElementById('login_email')
    const login_password = document.getElementById('login_password')  
    if (!login_email.value || !login_password.value) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in both email and password.',
        background: '#fff3cd',
        color: '#856404',
        confirmButtonColor: '#f39c12',
        iconColor: '#856404',
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            content: 'my-content-class',
            confirmButton: 'my-confirm-button'
        }
    });
      return
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: login_email.value,
        password: login_password.value,
      })
      if (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: JSON.stringify(error),
            background: '#f8d7da',
            color: '#721c24',
            confirmButtonColor: '#dc3545',
            iconColor: '#721c24',
            customClass: {
                popup: 'my-popup-class',
                title: 'my-title-class',
                content: 'my-content-class',
                confirmButton: 'my-confirm-button'
            }
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Logged in Successfully!',
          text: JSON.stringify(data.email),
          background: 'black',
          color: 'white',
          confirmButtonColor: 'white',
          iconColor: 'white',
          customClass: {
              popup: 'my-popup-class',
              title: 'my-title-class',
              content: 'my-content-class',
          }
      });
        setInterval(() => {
          window.location.href = 'home.html'
        }, 1000)
      }
      login_email.value = ''
      login_password.value = ''
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An unexpected error occurred.',
        background: '#f8d7da',
        color: '#721c24',
        confirmButtonColor: '#dc3545',
        iconColor: '#721c24',
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            content: 'my-content-class',
            confirmButton: 'my-confirm-button'
        }
    });
      login_email.value = ''
      login_password.value = ''
    }
  });
  

  // logout
  const logout = document.getElementById('logoutBtn');
  if (logout) {
      logout.addEventListener('click', async () => {
          try {
              const { error } = await supabase.auth.signOut();
              if (error) {
    
                Swal.fire({
                  icon: 'error',
                  title: 'Logout Failed',
                  text: error.message,
                  background: '#f8d7da',
                  color: '#721c24',
                  confirmButtonColor: '#dc3545',
                  iconColor: '#721c24',
                  customClass: {
                      popup: 'my-popup-class',
                      title: 'my-title-class',
                      content: 'my-content-class',
                      confirmButton: 'my-confirm-button'
                  }
              });
              } else {
                  
                Swal.fire({
                  icon: 'success',
                  title: 'Logged Out Successfully',
                  text: 'You have been logged out.',
                  showConfirmButton: false,
                  timer: 1500,
                  background: 'black',
                  color: 'white',
                  confirmButtonColor: 'white',
                  iconColor: 'white',
                  customClass: {
                      popup: 'my-popup-class',
                      title: 'my-title-class',
                      content: 'my-content-class',
                  }
              }).then(() => {
                  window.location.href = 'login.html';
              });
              }
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'An Error Occurred',
              text: error.message,
              background: '#f8d7da',
              color: '#721c24',
              confirmButtonColor: '#dc3545',
              iconColor: '#721c24',
              customClass: {
                  popup: 'my-popup-class',
                  title: 'my-title-class',
                  content: 'my-content-class',
                  confirmButton: 'my-confirm-button'
              }
          });
          }
      });
  }

  // update profile
  const updateProfile = document.getElementById('updateProfileBtn');

  if (updateProfile) {
      updateProfile.addEventListener('click', async () => {
          if (name) {
              try {
                  const { user, error } = await supabase.auth.updateUser({
                      data: { name }
                  });
  
                  if (error) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Update Failed',
                      text: error.message,
                      background: '#f8d7da',
                      color: '#721c24',
                      confirmButtonColor: '#dc3545',
                      iconColor: '#721c24',
                      customClass: {
                          popup: 'my-popup-class',
                          title: 'my-title-class',
                          content: 'my-content-class',
                          confirmButton: 'my-confirm-button'
                      }
                  });
                  } else {
                    Swal.fire({
                      icon: 'success',
                      title: 'Update Successful',
                      text: 'Your name has been updated.',
                      background: 'black',
                      color: 'white',
                      confirmButtonColor: 'white',
                      iconColor: 'white',
                      customClass: {
                          popup: 'my-popup-class',
                          title: 'my-title-class',
                          content: 'my-content-class',
                      }
                  });
                      document.getElementById('usernameDisplay').innerText = user?.user_metadata?.name || 'No name set';
                  }
              } catch (error) {
                Swal.fire({
                  icon: 'error',
                  title: 'An Error Occurred',
                  text: error.message,
                  background: '#f8d7da',
                  color: '#721c24',
                  confirmButtonColor: '#dc3545',
                  iconColor: '#721c24',
                  customClass: {
                      popup: 'my-popup-class',
                      title: 'my-title-class',
                      content: 'my-content-class',
                      confirmButton: 'my-confirm-button'
                  }
              });
              }
          }
      });
  }
const edit_btn = document.getElementById("editing-profile");
if (edit_btn) {
    edit_btn.addEventListener("click", async (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const updateData = {
                data: {
                    first_name: username,
                }
            };

            if (password) {
                updateData.password = password;
            }

            const { error: updateError } = await supabase.auth.updateUser(updateData);

            if (updateError) {
                console.log("Error updating profile:", updateError.message);
                return;
            }
            setTimeout(() => {
                window.location.href = "./home.html";
            }, 2000);

            Swal.fire({
                icon: 'success',
                title: 'Profile Updated',
                text: 'Your profile has been updated.',
            });
            
            // Reset the form fields
            document.getElementById("username").value = '';
            document.getElementById("password").value = '';
        } catch (error) {
            console.log("Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'An error occurred',
                text: error.message,
            });
        }
    });
}

async function loadUserProfile() {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        console.log("Error fetching user:", error?.message);
        return;
    }

    const user = data.user;
    let username = user.user_metadata?.first_name || user.email;

    if (username.includes('@')) {
        username = username.split('@')[0];
    }

  
    username = username.replace(/\d+/g, '');

    const displayNameElement = document.getElementById('username');
    if (displayNameElement) {
        displayNameElement.textContent = username.trim(); 
    } else {
        console.log("Username element not found");
    }
    const usernameInput = document.getElementById("username");
    if (usernameInput) {
        usernameInput.value = username.trim(); 
    }
    
} catch (err) {
    console.log("Error:", err.message);
}

}


let main = document.getElementById("main");
// RealTime Data:
const realTimeData = () => {
  supabase
    .channel("realtime_posts")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "post" },
      (payload) => {
        console.log("Change received!", payload);
        fetchData();
      }
    )

    .subscribe();
};


// Fetch/Get Data
const fetchData = async () => {
  try {
    const { data, error } = await supabase.from("post").select();

    if (error) {
      console.log("error-->", error.message);
    } else {
      main.innerHTML = "";
      console.log("data get successfully!");
      data.forEach((post) => {
        // Create HTML content for each post
        main.innerHTML += `<div class="card">
          <h2>${post.title}</h2>
          <hr>
          <p>${post.description}</p>
          <button class = "btn1" id="updatePost" data-id="${post.id}">Update Post</button>
          <button class = "btn1" id="deletePost" data-id="${post.id}">Delete Post</button>
        </div>`;
      });
      eventListener();
    }
  }
  catch (err) {
    console.log("err-->", err);
  }
};

// INSERT DATA:
let btn = document.getElementById("createPost");

btn.addEventListener("click", async () => {
  let title = document.getElementById("title");
  let description = document.getElementById("description");

  try {
    const { error } = await supabase
      .from("post")
      .insert({ title: title.value, description: description.value });

    if (error) 
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something went wrong! ${error.message}`,
          showConfirmButton: false,
          confirmButtonText: 'Try Again',
          background: '#f8d7da',  // Custom background color
          color: '#721c24',  // Custom text color
          confirmButtonColor: '#dc3545',  // Custom button color
          iconColor: '#721c24',  // Icon color
          customClass: {
              popup: 'my-popup-class',
              title: 'my-title-class',
              content: 'my-content-class',
              confirmButton: 'my-confirm-button'
          }
      });
      console.log("error-->", error.message);
    };
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
      title: 'Post Created!',
      text: 'Your post was added successfully.',
      background: 'black',  
      color: 'white',  
      confirmButtonColor: 'white',  
      iconColor: 'white',  
      customClass: {
          popup: 'my-popup-class',
          title: 'my-title-class',
          content: 'my-content-class',
          
      }
    });
    console.log("Data added successfully!");
    title.value = "";
    description.value = "";

  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Something went wrong! ${err.message}`,
      confirmButtonText: 'Try Again'
    });
    console.log("err-->", err);
  }
});

// Delete DATA:
const deletePost = async (postId) => {
  try {
    const { error } = await supabase
      .from("post")
      .delete()
      .eq("id", postId);
    if (error) {
      console.log("error-->", error.message);
    } else {
      console.log("post delete successFully");
    }
  } catch (err) {
    console.log("err-->", err);
  }
};

// Update DATA:
const updatePost = async (postId) => {
  let newTitle = prompt("add new title");
  let newDescription = prompt("add new Description");

  try {
    const { error } = await supabase
      .from("post")
      .update({ title: newTitle, description: newDescription })
      .eq("id", postId);
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Something went wrong! ${error.message}`,
        confirmButtonText: 'Try Again',
        background: '#f8d7da',
        color: '#721c24',
        confirmButtonColor: '#dc3545',
        iconColor: '#721c24',
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            content: 'my-content-class',
            confirmButton: 'my-confirm-button'
        }
    });
      console.log("error-->", error.message);
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Your post has been updated successfully!',
        showConfirmButton: false,
        timer: 2000,
        background: 'black',
        color: 'white',
        confirmButtonColor: 'white',
        iconColor: 'white',
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            content: 'my-content-class',
        }
    });
      console.log("post update successFully");
    }
  } catch (err) {
    console.log("err-->", err);
  }
};

// Event HANDLERs combine:
const eventListener = () => {
  let updateButtons = document.querySelectorAll("#updatePost");
  let deleteButtons = document.querySelectorAll("#deletePost");

  updateButtons.forEach((update) => {
    update.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      updatePost(id);
    });
  });

  deleteButtons.forEach((del) => {
    del.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      deletePost(id);
    });
  });
};

fetchData();
realTimeData();

// Upload image 
let upload = document.getElementById("upload");
upload.addEventListener("click", async () => {
  let file = document.getElementById("file").files[0];
  console.log(file);
  try {
    const { error } = await supabase.storage
      .from("upload-image")
      .upload(`public/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log("error-->", error.message);
    } else {
      console.log("file upload successfully");
    }
  } catch (err) {
    console.log(err);
  }
});
window.onload = () => {
    loadUserProfile(); 
};
main.innerHTML = "";
