import React from "react";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auth/form/SigninForm";
import SignupForm from "./_auth/form/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

import { Chat, Home, Progress, Report } from "./_root/pages";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Report" element={<Report />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
