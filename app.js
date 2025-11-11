function showRegister(){ loginCard.style.display='none'; registerCard.style.display='flex'; }
    function showLogin(){ loginCard.style.display='flex'; registerCard.style.display='none'; }

    function register(){
      const user=regUser.value.trim(),pass=regPass.value.trim();
      if(!user||!pass){alert("Completa los campos");return;}
      const users=JSON.parse(localStorage.getItem("brisaUsers")||"[]");
      const invite=Math.random().toString(36).substring(2,8).toUpperCase();
      users.push({user,pass,invite,invited:[]});
      localStorage.setItem("brisaUsers",JSON.stringify(users));
      alert("Usuario registrado. Código: "+invite);
      showLogin();
    }

    function login(){
      const user=loginUser.value.trim(),pass=loginPass.value.trim();
      const users=JSON.parse(localStorage.getItem("brisaUsers")||"[]");
      const found=users.find(u=>u.user===user&&u.pass===pass);
      if(found){
        localStorage.setItem("brisaActive",user);
        loginCard.style.display='none';
        document.getElementById('inviteCode').innerText=found.invite;
      } else alert("Credenciales incorrectas");
    }

    function logout(){ loginCard.style.display='flex'; }

    function showSection(id){
      document.querySelectorAll(".card").forEach(c=>c.style.display="none");
      document.getElementById(id).style.display="block";
    }

    function saveEmotion(){
      const mood=moodSelect.value,notes=emotionNotes.value.trim();
      if(!mood||!notes){alert("Completa todos los campos");return;}
      const logs=JSON.parse(localStorage.getItem("brisaEmotions")||"[]");
      logs.push({mood,notes,date:new Date().toLocaleString()});
      localStorage.setItem("brisaEmotions",JSON.stringify(logs));
      emotionSaved.innerHTML="<p>💖 Emoción guardada correctamente.</p>";
      emotionNotes.value="";
    }

    function saveProfile(){
      const name=profileName.value,birth=profileBirth.value,country=profileCountry.value,weight=profileWeight.value,height=profileHeight.value;
      const user=localStorage.getItem("brisaActive");
      if(!user){alert("Inicia sesión");return;}
      const profiles=JSON.parse(localStorage.getItem("brisaProfiles")||"{}");
      profiles[user]={name,birth,country,weight,height};
      localStorage.setItem("brisaProfiles",JSON.stringify(profiles));
      alert("Perfil guardado correctamente");
    }
