module.exports=[95347,a=>{"use strict";var b=a.i(87924),c=a.i(1223),d=a.i(78445);a.s(["default",0,function(){let a=(0,d.useGoogleLogin)({scope:"email profile openid",onSuccess:async a=>{console.log("Custom Google Login Success:",a);try{let b=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${a.access_token}`}});if(b.ok){let c=await b.json();console.log("Fetched User Profile Info:",c),localStorage.setItem("token",a.access_token);let d={email:c.email||"",name:c.name||c.given_name||(c.email?c.email.split("@")[0]:"User"),picture:c.picture||null};localStorage.setItem("user",JSON.stringify(d));try{let a=await fetch("https://service-one-backend-592281685075.us-central1.run.app/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.email,name:c.name||c.given_name||c.email.split("@")[0]})});if(a.ok){let b=await a.json(),e={...d,...b.user};(!e.name||""===String(e.name).trim())&&d.name&&(e.name=d.name),!e.picture&&c.picture&&(e.picture=c.picture),localStorage.setItem("user",JSON.stringify(e))}}catch(a){console.error("Failed to register user in backend:",a)}setTimeout(()=>{window.location.href="/"},150)}}catch(a){console.error("Error in custom Google Authentication handshake:",a)}},onError:a=>{console.error("Custom Google Auth Failed:",a)}});return(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#f8fafc"},children:[(0,b.jsx)(c.default,{}),(0,b.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 900px) {
          .login-image-panel {
            display: none !important;
          }
          .login-form-panel {
            flex: 1 !important;
            padding: 1.5rem !important;
          }
          .login-main {
            flex-direction: column !important;
          }
        }
        @media (max-width: 480px) {
          .login-title {
            font-size: 1.75rem !important;
          }
          .login-subtitle {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
          .login-logo-box {
            width: 90px !important;
            height: 90px !important;
            margin-bottom: 1.5rem !important;
          }
          .login-logo-img {
            width: 70px !important;
            height: 70px !important;
          }
        }
      `}}),(0,b.jsxs)("main",{className:"login-main",style:{flex:1,display:"flex"},children:[(0,b.jsx)("div",{className:"login-image-panel",style:{flex:"1",display:"flex",backgroundColor:"#eff6ff",backgroundImage:"url(/login-bg.png)",backgroundSize:"cover",backgroundPosition:"center",position:"relative"},children:(0,b.jsxs)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.7))",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"4rem"},children:[(0,b.jsx)("h2",{style:{color:"white",fontSize:"2.5rem",fontWeight:800,marginBottom:"1rem",textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:"Know the Fair Price."}),(0,b.jsx)("p",{style:{color:"#e2e8f0",fontSize:"1.2rem",maxWidth:"400px",lineHeight:1.6,textShadow:"0 1px 2px rgba(0,0,0,0.3)"},children:"Join thousands of users diagnosing home service issues and connecting with trusted, verified professionals."})]})}),(0,b.jsx)("div",{className:"login-form-panel",style:{flex:"1",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:(0,b.jsxs)("div",{style:{width:"100%",maxWidth:"420px",textAlign:"center"},children:[(0,b.jsx)("div",{className:"login-logo-box",style:{width:"115px",height:"115px",backgroundColor:"#eff6ff",borderRadius:"24px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 2rem",boxShadow:"0 4px 12px rgba(37, 99, 235, 0.08)"},children:(0,b.jsx)("img",{className:"login-logo-img",src:"/logo.png",alt:"ServiceOne Logo",style:{width:"95px",height:"95px",objectFit:"contain"}})}),(0,b.jsx)("h1",{className:"login-title",style:{fontSize:"2.25rem",fontWeight:800,color:"#0f172a",marginBottom:"0.5rem"},children:"Welcome Back"}),(0,b.jsx)("p",{className:"login-subtitle",style:{color:"#64748b",marginBottom:"2.5rem",fontSize:"1.1rem"},children:"Sign in to access your reports and history."}),(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,b.jsxs)("button",{onClick:()=>a(),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",width:"100%",maxWidth:"320px",height:"48px",background:"#ffffff",border:"1.5px solid #e2e8f0",borderRadius:"24px",color:"#1e293b",fontSize:"15px",fontWeight:"600",fontFamily:"Inter, -apple-system, sans-serif",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 2px 4px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.05)",outline:"none"},onMouseOver:a=>{a.currentTarget.style.backgroundColor="#f8fafc",a.currentTarget.style.borderColor="#cbd5e1",a.currentTarget.style.transform="translateY(-1px)",a.currentTarget.style.boxShadow="0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)"},onMouseOut:a=>{a.currentTarget.style.backgroundColor="#ffffff",a.currentTarget.style.borderColor="#e2e8f0",a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 2px 4px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.05)"},children:[(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",style:{display:"block",flexShrink:0},children:[(0,b.jsx)("path",{fill:"#4285F4",d:"M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.47h4.84c-.21 1.12-.84 2.07-1.79 2.7l2.77 2.15c1.62-1.5 2.55-3.7 2.55-6.32z"}),(0,b.jsx)("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.2l-2.77-2.15c-.77.52-1.75.83-2.77.83-2.34 0-4.32-1.58-5.03-3.7L1.6 12.9c1.48 2.94 4.53 4.93 7.82 4.93z"}),(0,b.jsx)("path",{fill:"#FBBC05",d:"M3.97 10.78c-.18-.54-.28-1.12-.28-1.71s.1-1.17.28-1.71L1.6 5.2c-.59 1.18-.93 2.5-.93 3.8s.34 2.62.93 3.8l2.37-1.82z"}),(0,b.jsx)("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.5.45 3.44 1.35L15 2.1C13.46.67 11.42 0 9 0 5.71 0 2.66 2 1.18 4.93l2.79 2.15C4.68 4.95 6.66 3.58 9 3.58z"})]}),"Continue with Google"]})}),(0,b.jsx)("p",{style:{marginTop:"2rem",fontSize:"0.85rem",color:"#94a3b8"},children:"By signing in, you agree to our Terms of Service and Privacy Policy."})]})})]})]})}])}];

//# sourceMappingURL=src_app_login_page_jsx_0l-rvb7._.js.map