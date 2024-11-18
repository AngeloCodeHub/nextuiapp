"use client";
import { StrictMode, useState, useEffect, ReactNode } from "react";

export default function Home() {
  return (
    <StrictMode>

      <main id="home" className="mybackground">
        <header className="headerAndnav header-wrap">
          <img src="/sseremove.png" alt="王者歸來logo" className="logo" />
          <nav>
            <ul className="onlynav">
              <li> <a href="/news.html">最新消息</a> </li>
              <li> <a href="/query.html">查詢</a> </li>
              <li> <a href="/mail.html">聯絡我們</a> </li>
            </ul>
          </nav>
        </header>
        <div className="webcontent wrapper">
          <h1 className="webtitle"> Angelo Hu </h1>
          <p>一位跨越電腦作業系統與科技時代的電腦專家,著作等身的作家.</p>
          <a href="/hungbook.html" className="button">著作</a>
        </div>
      </main>
      
      <div className="bookcontents header-wrap">
        <article>
          <header className="bookinfo">
            <h2 className="booktitle">Excel VBA</h2>
            <p className="bookfocus">Hot!<br />閱讀焦點<br />Hot!</p>
            <p className="booknew">全新上市</p>

          </header>
          <img src="/excelvba.jpg" alt="execelvba海報" />
          <p>
            這是目前市面上相關VBA書籍程式實例最豐富，最強入門與最完整應用
            的書籍，從手工建立巨集開始，逐步解說操作環境、VBA語法、變數、
            流程控制、函數與程序設計，然後完整解說VBA與活頁簿
            、工作表、儲存格的關係。
          </p>
        </article>

        <aside>
          <h3 className="asidetitle"> 辦公室系列 </h3>
          <ul className="asidemenu">
            <li> <a href="#">Excel最強入門</a> </li>
            <li> <a href="#">Excel函數庫</a> </li>
            <li> <a href="#">Excel VBA</a> </li>
            <li> <a href="#">Power BI</a> </li>
          </ul>
          <h3 className="asidetitle">Angelo Hu簡介</h3>
          <p>著作等身，所著書籍特色是實例豐富，讀者只要遵循書內容循序漸
            進學習必定可以在最短時間學會書籍所述內容。</p>
        </aside>
      </div>
      <footer>
        <div className="footer-wrapper">
          <p>&reg 版權所有 &reg</p>
        </div>
      </footer>
    </StrictMode>
  );
}
