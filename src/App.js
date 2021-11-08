import * as React from 'react';
import { useState } from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
import {Route} from 'react-router-dom';
import Category from './Components/Category';
import Mainbg from './Components/MainBg';
import SubBg from './Components/SubBg';
import Coffee001 from './Components/Data/coffee/Coffee001';
import Coffee002 from './Components/Data/coffee/Coffee002';
import Coffee003 from './Components/Data/coffee/Coffee003';
import Coffee004 from './Components/Data/coffee/Coffee004';
import Coffee005 from './Components/Data/coffee/Coffee005';
import Coffee006 from './Components/Data/coffee/Coffee006';
import Coffee007 from './Components/Data/coffee/Coffee007';
import Coffee008 from './Components/Data/coffee/Coffee008';
import Coffee009 from './Components/Data/coffee/Coffee009';
import Coffee010 from './Components/Data/coffee/Coffee010';
import Coffee011 from './Components/Data/coffee/Coffee011';
import Coffee012 from './Components/Data/coffee/Coffee012';

import IceCream001 from './Components/Data/icecream/IceCream001';
import IceCream002 from './Components/Data/icecream/IceCream002';

import FastFood001 from './Components/Data/fastfood/FastFood001';
import FastFood002 from './Components/Data/fastfood/FastFood002';
import FastFood003 from './Components/Data/fastfood/FastFood003';
import FastFood004 from './Components/Data/fastfood/FastFood004';
import FastFood005 from './Components/Data/fastfood/FastFood005';
import FastFood006 from './Components/Data/fastfood/FastFood006';
import FastFood007 from './Components/Data/fastfood/FastFood007';
import FastFood008 from './Components/Data/fastfood/FastFood008';
import FastFood009 from './Components/Data/fastfood/FastFood009';
import FastFood010 from './Components/Data/fastfood/FastFood010';
import FastFood011 from './Components/Data/fastfood/FastFood011';
import FastFood012 from './Components/Data/fastfood/FastFood012';
import FastFood013 from './Components/Data/fastfood/FastFood013';
import FastFood014 from './Components/Data/fastfood/FastFood014';
import FastFood015 from './Components/Data/fastfood/FastFood015';
import FastFood016 from './Components/Data/fastfood/FastFood016';
import FastFood017 from './Components/Data/fastfood/FastFood017';

import Restaurant001 from './Components/Data/restaurant/Restaurant001';
import Restaurant002 from './Components/Data/restaurant/Restaurant002';
import Restaurant003 from './Components/Data/restaurant/Restaurant003';
import Restaurant004 from './Components/Data/restaurant/Restaurant004';
import Restaurant005 from './Components/Data/restaurant/Restaurant005';
import Restaurant006 from './Components/Data/restaurant/Restaurant006';
import Restaurant007 from './Components/Data/restaurant/Restaurant007';
import Restaurant008 from './Components/Data/restaurant/Restaurant008';
import Restaurant009 from './Components/Data/restaurant/Restaurant009';
import Restaurant010 from './Components/Data/restaurant/Restaurant010';

import GiftCard001 from './Components/Data/giftcard/GiftCard001';
import GiftCard002 from './Components/Data/giftcard/GiftCard002';
import GiftCard003 from './Components/Data/giftcard/GiftCard003';
import GiftCard004 from './Components/Data/giftcard/GiftCard004';
import GiftCard005 from './Components/Data/giftcard/GiftCard005';
import GiftCard006 from './Components/Data/giftcard/GiftCard006';
import GiftCard007 from './Components/Data/giftcard/GiftCard007';
import GiftCard008 from './Components/Data/giftcard/GiftCard008';
import GiftCard009 from './Components/Data/giftcard/GiftCard009';
import GiftCard010 from './Components/Data/giftcard/GiftCard010';
import GiftCard011 from './Components/Data/giftcard/GiftCard011';
import GiftCard012 from './Components/Data/giftcard/GiftCard012';
import GiftCard013 from './Components/Data/giftcard/GiftCard013';
import GiftCard014 from './Components/Data/giftcard/GiftCard014';

import MoneyCard001 from './Components/Data/moneycard/MoneyCard001';
import MoneyCard002 from './Components/Data/moneycard/MoneyCard002';
import MoneyCard003 from './Components/Data/moneycard/MoneyCard003';
import MoneyCard004 from './Components/Data/moneycard/MoneyCard004';
import MoneyCard005 from './Components/Data/moneycard/MoneyCard005';

import Mart001 from './Components/Data/mart/Mart001';
import Mart002 from './Components/Data/mart/Mart002';
import Mart003 from './Components/Data/mart/Mart003';

import Baker001 from './Components/Data/baker/Baker001';
import Baker002 from './Components/Data/baker/Baker002';
import Baker003 from './Components/Data/baker/Baker003';
import Baker004 from './Components/Data/baker/Baker004';
import Baker005 from './Components/Data/baker/Baker005';
import Baker006 from './Components/Data/baker/Baker006';
import Baker007 from './Components/Data/baker/Baker007';
import Baker008 from './Components/Data/baker/Baker008';
import Baker009 from './Components/Data/baker/Baker009';
import Baker010 from './Components/Data/baker/Baker010';
import Baker011 from './Components/Data/baker/Baker011';

import Movie001 from './Components/Data/movie/Movie001';
import Movie002 from './Components/Data/movie/Movie002';

import Beautie001 from './Components/Data/beautie/Beautie001';
import Beautie002 from './Components/Data/beautie/Beautie002';
import Beautie003 from './Components/Data/beautie/Beautie003';

function App() {
    let [coffee001, coffee001변경]=useState(Coffee001);
    let [coffee002, coffee002변경]=useState(Coffee002);
    let [coffee003, coffee003변경]=useState(Coffee003);
    let [coffee004, coffee004변경]=useState(Coffee004);
    let [coffee005, coffee005변경]=useState(Coffee005);
    let [coffee006, coffee006변경]=useState(Coffee006);
    let [coffee007, coffee007변경]=useState(Coffee007);
    let [coffee008, coffee008변경]=useState(Coffee008);
    let [coffee009, coffee009변경]=useState(Coffee009);
    let [coffee010, coffee010변경]=useState(Coffee010);
    let [coffee011, coffee011변경]=useState(Coffee011);
    let [coffee012, coffee012변경]=useState(Coffee012);

    let [icecream001, icecream001변경]=useState(IceCream001);
    let [icecream002, icecream002변경]=useState(IceCream002);

    let [fastfood001, fastfood001변경]=useState(FastFood001);
    let [fastfood002, fastfood002변경]=useState(FastFood002);
    let [fastfood003, fastfood003변경]=useState(FastFood003);
    let [fastfood004, fastfood004변경]=useState(FastFood004);
    let [fastfood005, fastfood005변경]=useState(FastFood005);
    let [fastfood006, fastfood006변경]=useState(FastFood006);
    let [fastfood007, fastfood007변경]=useState(FastFood007);
    let [fastfood008, fastfood008변경]=useState(FastFood008);
    let [fastfood009, fastfood009변경]=useState(FastFood009);
    let [fastfood010, fastfood010변경]=useState(FastFood010);
    let [fastfood011, fastfood011변경]=useState(FastFood011);
    let [fastfood012, fastfood012변경]=useState(FastFood012);
    let [fastfood013, fastfood013변경]=useState(FastFood013);
    let [fastfood014, fastfood014변경]=useState(FastFood014);
    let [fastfood015, fastfood015변경]=useState(FastFood015);
    let [fastfood016, fastfood016변경]=useState(FastFood016);
    let [fastfood017, fastfood017변경]=useState(FastFood017);

    let [restaurant001, restaurant001변경]=useState(Restaurant001);
    let [restaurant002, restaurant002변경]=useState(Restaurant002);
    let [restaurant003, restaurant003변경]=useState(Restaurant003);
    let [restaurant004, restaurant004변경]=useState(Restaurant004);
    let [restaurant005, restaurant005변경]=useState(Restaurant005);
    let [restaurant006, restaurant006변경]=useState(Restaurant006);
    let [restaurant007, restaurant007변경]=useState(Restaurant007);
    let [restaurant008, restaurant008변경]=useState(Restaurant008);
    let [restaurant009, restaurant009변경]=useState(Restaurant009);
    let [restaurant010, restaurant010변경]=useState(Restaurant010);

    let [giftcard001, giftcard001변경]=useState(GiftCard001);
    let [giftcard002, giftcard002변경]=useState(GiftCard002);
    let [giftcard003, giftcard003변경]=useState(GiftCard003);
    let [giftcard004, giftcard004변경]=useState(GiftCard004);
    let [giftcard005, giftcard005변경]=useState(GiftCard005);
    let [giftcard006, giftcard006변경]=useState(GiftCard006);
    let [giftcard007, giftcard007변경]=useState(GiftCard007);
    let [giftcard008, giftcard008변경]=useState(GiftCard008);
    let [giftcard009, giftcard009변경]=useState(GiftCard009);
    let [giftcard010, giftcard010변경]=useState(GiftCard010);
    let [giftcard011, giftcard011변경]=useState(GiftCard011);
    let [giftcard012, giftcard012변경]=useState(GiftCard012);
    let [giftcard013, giftcard013변경]=useState(GiftCard013);
    let [giftcard014, giftcard014변경]=useState(GiftCard014);

    let [moneycard001, moneycard001변경]=useState(MoneyCard001);
    let [moneycard002, moneycard002변경]=useState(MoneyCard002);
    let [moneycard003, moneycard003변경]=useState(MoneyCard003);
    let [moneycard004, moneycard004변경]=useState(MoneyCard004);
    let [moneycard005, moneycard005변경]=useState(MoneyCard005);

    let [mart001, mart001변경]=useState(Mart001);
    let [mart002, mart002변경]=useState(Mart002);
    let [mart003, mart003변경]=useState(Mart003);

    let [baker001, baker001변경]=useState(Baker001);
    let [baker002, baker002변경]=useState(Baker002);
    let [baker003, baker003변경]=useState(Baker003);
    let [baker004, baker004변경]=useState(Baker004);
    let [baker005, baker005변경]=useState(Baker005);
    let [baker006, baker006변경]=useState(Baker006);
    let [baker007, baker007변경]=useState(Baker007);
    let [baker008, baker008변경]=useState(Baker008);
    let [baker009, baker009변경]=useState(Baker009);
    let [baker010, baker010변경]=useState(Baker010);
    let [baker011, baker011변경]=useState(Baker011);

    let [movie001, movie001변경]=useState(Movie001);
    let [movie002, movie002변경]=useState(Movie002);

    let [beautie001, beautie001변경]=useState(Beautie001);
    let [beautie002, beautie002변경]=useState(Beautie002);
    let [beautie003, beautie003변경]=useState(Beautie003);




    return (
        <div className="App">
{/* ------------------------ 이용방법 페이지 ------------------------- */}
{/* --------------------- "/main/howdo" 페이지 ---------------------- */}

            <Route exact="exact" path="/main/howdo">
            <SubBg/> 이용방법
            </Route>

{/* ------------------------ 공지사항 페이지 ------------------------- */}
{/* --------------------- "/main/notice" 페이지 ---------------------- */} 

            <Route exact="exact" path="/main/notice">
            <SubBg/> 공지사항
            </Route>

{/* ------------------------ 고객센터 페이지 ------------------------- */}
{/* --------------------- "/main/customer" 페이지 ---------------------- */}            

            <Route exact="exact" path="/main/customer">
            <SubBg/> 고객센터
            </Route>

{/* ------------------------ 로그인 페이지 ------------------------- */}
{/* --------------------- "/main/login" 페이지 ---------------------- */}  

            <Route exact="exact" path="/main/login">
            <SubBg/>
            </Route>

{/* ------------------------ 회원가입 페이지------------------------- */}
{/* --------------------- "/main/signup" 페이지 ---------------------- */} 

            <Route exact="exact" path="/main/signup">
            <SubBg/>
            </Route>


{/* -------------------- 기본 투썸플레이스 페이지--------------------- */}
{/* -------------------------- "/" 페이지 --------------------------- */}          

            <Route exact="exact" path="/">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee001.map((a,i)=>{
                                    return <Card001001 coffee001={coffee001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>
{/* ------------------------------ 커피 ------------------------------ */}
{/* ---------------- "/goods/ 001001 ~ 001012" 페이지 ---------------- */}

            <Route exact="exact" path="/goods/001001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee001.map((a,i)=>{
                                    return <Card001001 coffee001={coffee001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                Coffee002.map((a,i)=>{
                                    return <Card001002 coffee002={coffee002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001003">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee003.map((a,i)=>{
                                    return <Card001003 coffee003={coffee003[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001004">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee004.map((a,i)=>{
                                    return <Card001004 coffee004={coffee004[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001005">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee005.map((a,i)=>{
                                    return <Card001005 coffee005={coffee005[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001006">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee006.map((a,i)=>{
                                    return <Card001006 coffee006={coffee006[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001007">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee007.map((a,i)=>{
                                    return <Card001007 coffee007={coffee007[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001008">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee008.map((a,i)=>{
                                    return <Card001008 coffee008={coffee008[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001009">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee009.map((a,i)=>{
                                    return <Card001009 coffee009={coffee009[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001010">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee010.map((a,i)=>{
                                    return <Card001010 coffee010={coffee010[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001011">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee011.map((a,i)=>{
                                    return <Card001011 coffee011={coffee011[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/001012">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                coffee012.map((a,i)=>{
                                    return <Card001012 coffee012={coffee012[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>


{/* --------------------------- 아이스크림 --------------------------- */}
{/* ---------------- "/goods/ 002001 ~ 002002" 페이지 ---------------- */}


            <Route exact="exact" path="/goods/002001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                icecream001.map((a,i)=>{
                                    return <Card002001 icecream001={icecream001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/002002">
                <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                icecream002.map((a,i)=>{
                                    return <Card002002 icecream002={icecream002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

{/* ------------------------- 치킨/피자/버거 ------------------------- */}
{/* ---------------- "/goods/ 003001 ~ 003017" 페이지 ---------------- */}            



            <Route exact="exact" path="/goods/003001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood001.map((a,i)=>{
                                    return <Card003001 fastfood001={fastfood001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood002.map((a,i)=>{
                                    return <Card003002 fastfood002={fastfood002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003003">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood003.map((a,i)=>{
                                    return <Card003003 fastfood003={fastfood003[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003004">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood004.map((a,i)=>{
                                    return <Card003004 fastfood004={fastfood004[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003005">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood005.map((a,i)=>{
                                    return <Card003005 fastfood005={fastfood005[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003006">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood006.map((a,i)=>{
                                    return <Card003006 fastfood006={fastfood006[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003007">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood007.map((a,i)=>{
                                    return <Card003007 fastfood007={fastfood007[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003008">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood008.map((a,i)=>{
                                    return <Card003008 fastfood008={fastfood008[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003009">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood009.map((a,i)=>{
                                    return <Card003009 fastfood009={fastfood009[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003010">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood010.map((a,i)=>{
                                    return <Card003010 fastfood010={fastfood010[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003011">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood011.map((a,i)=>{
                                    return <Card003011 fastfood011={fastfood011[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003012">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood012.map((a,i)=>{
                                    return <Card003012 fastfood012={fastfood012[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003013">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood013.map((a,i)=>{
                                    return <Card003013 fastfood013={fastfood013[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003014">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood014.map((a,i)=>{
                                    return <Card003014 fastfood014={fastfood014[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003015">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood015.map((a,i)=>{
                                    return <Card003015 fastfood015={fastfood015[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003016">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood016.map((a,i)=>{
                                    return <Card003016 fastfood016={fastfood016[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/003017">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                fastfood017.map((a,i)=>{
                                    return <Card003017 fastfood017={fastfood017[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>


{/* ----------------------- 외식/분식/레스토랑 ----------------------- */}
{/* ---------------- "/goods/ 004001 ~ 004010" 페이지 ---------------- */} 



            <Route exact="exact" path="/goods/004001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant001.map((a,i)=>{
                                    return <Card004001 restaurant001={restaurant001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant002.map((a,i)=>{
                                    return <Card004002 restaurant002={restaurant002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004003">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant003.map((a,i)=>{
                                    return <Card004003 restaurant003={restaurant003[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004004">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant004.map((a,i)=>{
                                    return <Card004004 restaurant004={restaurant004[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004005">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant005.map((a,i)=>{
                                    return <Card004005 restaurant005={restaurant005[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004006">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant006.map((a,i)=>{
                                    return <Card004006 restaurant006={restaurant006[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004007">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant007.map((a,i)=>{
                                    return <Card004007 restaurant007={restaurant007[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004008">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant008.map((a,i)=>{
                                    return <Card004008 restaurant008={restaurant008[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004009">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant009.map((a,i)=>{
                                    return <Card004009 restaurant009={restaurant009[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/004010">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                restaurant010.map((a,i)=>{
                                    return <Card004010 restaurant010={restaurant010[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>
           

{/* ----------------------------- 상품권 ----------------------------- */}
{/* ---------------- "/goods/ 005001 ~ 005014" 페이지 ---------------- */} 


            <Route exact="exact" path="/goods/005001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard001.map((a,i)=>{
                                    return <Card005001 giftcard001={giftcard001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard002.map((a,i)=>{
                                    return <Card005002 giftcard002={giftcard002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005003">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard003.map((a,i)=>{
                                    return <Card005003 giftcard003={giftcard003[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005004">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard004.map((a,i)=>{
                                    return <Card005004 giftcard004={giftcard004[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005005">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard005.map((a,i)=>{
                                    return <Card005005 giftcard005={giftcard005[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005006">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard006.map((a,i)=>{
                                    return <Card005006 giftcard006={giftcard006[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005007">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard007.map((a,i)=>{
                                    return <Card005007 giftcard007={giftcard007[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005008">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard008.map((a,i)=>{
                                    return <Card005008 giftcard008={giftcard008[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005009">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard009.map((a,i)=>{
                                    return <Card005009 giftcard009={giftcard009[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005010">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard010.map((a,i)=>{
                                    return <Card005010 giftcard010={giftcard010[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005011">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard011.map((a,i)=>{
                                    return <Card005011 giftcard011={giftcard011[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005012">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard012.map((a,i)=>{
                                    return <Card005012 giftcard012={giftcard012[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005013">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard013.map((a,i)=>{
                                    return <Card005013 giftcard013={giftcard013[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/005014">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                giftcard014.map((a,i)=>{
                                    return <Card005014 giftcard014={giftcard014[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>


{/* ----------------------------- 금액권 ----------------------------- */}
{/* ---------------- "/goods/ 006001 ~ 006005" 페이지 ---------------- */} 


            <Route exact="exact" path="/goods/006001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                moneycard001.map((a,i)=>{
                                    return <Card006001 moneycard001={moneycard001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/006002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                moneycard002.map((a,i)=>{
                                    return <Card006002 moneycard002={moneycard002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/006003">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                moneycard003.map((a,i)=>{
                                    return <Card006003 moneycard003={moneycard003[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/006004">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                moneycard004.map((a,i)=>{
                                    return <Card006004 moneycard004={moneycard004[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/006005">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                moneycard005.map((a,i)=>{
                                    return <Card006005 moneycard005={moneycard005[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>


{/* -------------------------- 편의점/마트 --------------------------- */}
{/* ---------------- "/goods/ 007001 ~ 007003" 페이지 ---------------- */} 


            <Route exact="exact" path="/goods/007001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                mart001.map((a,i)=>{
                                    return <Card007001 mart001={mart001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/007002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                mart002.map((a,i)=>{
                                    return <Card007002 mart002={mart002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/007003">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                mart003.map((a,i)=>{
                                    return <Card007003 mart003={mart003[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>


{/* -------------------------- 베이커리/도넛 -------------------------- */}
{/* ---------------- "/goods/ 008001 ~ 008011" 페이지 ---------------- */} 


            <Route exact="exact" path="/goods/008001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker001.map((a,i)=>{
                                    return <Card008001 baker001={baker001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker002.map((a,i)=>{
                                    return <Card008002 baker002={baker002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008003">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker003.map((a,i)=>{
                                    return <Card008003 baker003={baker003[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008004">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker004.map((a,i)=>{
                                    return <Card008004 baker004={baker004[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008005">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker005.map((a,i)=>{
                                    return <Card008005 baker005={baker005[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008006">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker006.map((a,i)=>{
                                    return <Card008006 baker006={baker006[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008007">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker007.map((a,i)=>{
                                    return <Card008007 baker007={baker007[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008008">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker008.map((a,i)=>{
                                    return <Card008008 baker008={baker008[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008009">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker009.map((a,i)=>{
                                    return <Card008009 baker009={baker009[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008010">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker010.map((a,i)=>{
                                    return <Card008010 baker010={baker010[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/008011">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                baker011.map((a,i)=>{
                                    return <Card008011 baker011={baker011[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>


{/* -------------------------- 영화/테마파크 -------------------------- */}
{/* ---------------- "/goods/ 009001 ~ 009002" 페이지 ---------------- */} 


            <Route exact="exact" path="/goods/009001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                movie001.map((a,i)=>{
                                    return <Card009001 movie001={movie001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/009002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                movie002.map((a,i)=>{
                                    return <Card009002 movie002={movie002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>


{/* ------------------------------ 뷰티 ------------------------------ */}
{/* ---------------- "/goods/ 010001 ~ 010003" 페이지 ---------------- */} 


            
            <Route exact="exact" path="/goods/010001">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                beautie001.map((a,i)=>{
                                    return <Card010001 beautie001={beautie001[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/010002">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                beautie002.map((a,i)=>{
                                    return <Card010002 beautie002={beautie002[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>

            <Route exact="exact" path="/goods/010003">
            <Mainbg/>
                <MainHeader/>
                <div className="main_slidebox">
                    <h1>slidebox</h1>
                    <p>100% x 600px</p>
                </div>
                <div className="contant">
                    <Category/>     
                    <div id="contants" className="contant_goods">
                        <div className="goods">
                        {
                                beautie003.map((a,i)=>{
                                    return <Card010003 beautie003={beautie003[i]} i={i}/> 
                                })
                        }              
                        </div>
                    </div>
                </div>
            </Route>



        </div>
    );
}

function Card001001(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee001.title}</h4>
                            <p>{props.coffee001.price}</p>
        </div>
    )
}

function Card001002(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee002.title}</h4>
                            <p>{props.coffee002.price}</p>
        </div>
    )
}

function Card001003(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/003/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee003.title}</h4>
                            <p>{props.coffee003.price}</p>
        </div>
    )
}

function Card001004(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/004/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee004.title}</h4>
                            <p>{props.coffee004.price}</p>
        </div>
    )
}

function Card001005(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/005/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee005.title}</h4>
                            <p>{props.coffee005.price}</p>
        </div>
    )
}

function Card001006(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/006/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee006.title}</h4>
                            <p>{props.coffee006.price}</p>
        </div>
    )
}

function Card001007(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/007/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee007.title}</h4>
                            <p>{props.coffee007.price}</p>
        </div>
    )
}

function Card001008(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/008/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee008.title}</h4>
                            <p>{props.coffee008.price}</p>
        </div>
    )
}

function Card001009(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/009/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee009.title}</h4>
                            <p>{props.coffee009.price}</p>
        </div>
    )
}

function Card001010(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/010/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee010.title}</h4>
                            <p>{props.coffee010.price}</p>
        </div>
    )
}

function Card001011(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/011/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee011.title}</h4>
                            <p>{props.coffee011.price}</p>
        </div>
    )
}

function Card001012(props) {
    return(
        <div>
            <img src={"/img/goods_img/001/012/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.coffee012.title}</h4>
                            <p>{props.coffee012.price}</p>
        </div>
    )
}

function Card002001(props) {
    return(
        <div>
            <img src={"/img/goods_img/002/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.icecream001.title}</h4>
                            <p>{props.icecream001.price}</p>
        </div>
    )
}

function Card002002(props) {
    return(
        <div>
            <img src={"/img/goods_img/002/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.icecream002.title}</h4>
                            <p>{props.icecream002.price}</p>
        </div>
    )
}

function Card003001(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood001.title}</h4>
                            <p>{props.fastfood001.price}</p>
        </div>
    )
}

function Card003002(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood002.title}</h4>
                            <p>{props.fastfood002.price}</p>
        </div>
    )
}

function Card003003(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/003/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood003.title}</h4>
                            <p>{props.fastfood003.price}</p>
        </div>
    )
}

function Card003004(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/004/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood004.title}</h4>
                            <p>{props.fastfood004.price}</p>
        </div>
    )
}

function Card003005(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/005/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood005.title}</h4>
                            <p>{props.fastfood005.price}</p>
        </div>
    )
}

function Card003006(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/006/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood006.title}</h4>
                            <p>{props.fastfood006.price}</p>
        </div>
    )
}

function Card003007(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/007/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood007.title}</h4>
                            <p>{props.fastfood007.price}</p>
        </div>
    )
}

function Card003008(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/008/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood008.title}</h4>
                            <p>{props.fastfood008.price}</p>
        </div>
    )
}

function Card003009(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/009/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood009.title}</h4>
                            <p>{props.fastfood009.price}</p>
        </div>
    )
}

function Card003010(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/010/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood010.title}</h4>
                            <p>{props.fastfood010.price}</p>
        </div>
    )
}

function Card003011(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/011/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood011.title}</h4>
                            <p>{props.fastfood011.price}</p>
        </div>
    )
}

function Card003012(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/012/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood012.title}</h4>
                            <p>{props.fastfood012.price}</p>
        </div>
    )
}

function Card003013(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/013/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood013.title}</h4>
                            <p>{props.fastfood013.price}</p>
        </div>
    )
}

function Card003014(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/014/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood014.title}</h4>
                            <p>{props.fastfood014.price}</p>
        </div>
    )
}

function Card003015(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/015/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood015.title}</h4>
                            <p>{props.fastfood015.price}</p>
        </div>
    )
}

function Card003016(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/016/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood016.title}</h4>
                            <p>{props.fastfood016.price}</p>
        </div>
    )
}

function Card003017(props) {
    return(
        <div>
            <img src={"/img/goods_img/003/017/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.fastfood017.title}</h4>
                            <p>{props.fastfood017.price}</p>
        </div>
    )
}

function Card004001(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant001.title}</h4>
                            <p>{props.restaurant001.price}</p>
        </div>
    )
}

function Card004002(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant002.title}</h4>
                            <p>{props.restaurant002.price}</p>
        </div>
    )
}

function Card004003(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/003/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant003.title}</h4>
                            <p>{props.restaurant003.price}</p>
        </div>
    )
}

function Card004004(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/004/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant004.title}</h4>
                            <p>{props.restaurant004.price}</p>
        </div>
    )
}

function Card004005(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/005/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant005.title}</h4>
                            <p>{props.restaurant005.price}</p>
        </div>
    )
}

function Card004006(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/006/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant006.title}</h4>
                            <p>{props.restaurant006.price}</p>
        </div>
    )
}

function Card004007(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/007/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant007.title}</h4>
                            <p>{props.restaurant007.price}</p>
        </div>
    )
}

function Card004008(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/008/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant008.title}</h4>
                            <p>{props.restaurant008.price}</p>
        </div>
    )
}

function Card004009(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/009/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant009.title}</h4>
                            <p>{props.restaurant009.price}</p>
        </div>
    )
}

function Card004010(props) {
    return(
        <div>
            <img src={"/img/goods_img/004/010/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.restaurant010.title}</h4>
                            <p>{props.restaurant010.price}</p>
        </div>
    )
}

function Card005001(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard001.title}</h4>
                            <p>{props.giftcard001.price}</p>
        </div>
    )
}

function Card005002(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard002.title}</h4>
                            <p>{props.giftcard002.price}</p>
        </div>
    )
}

function Card005003(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/003/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard003.title}</h4>
                            <p>{props.giftcard003.price}</p>
        </div>
    )
}

function Card005004(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/004/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard004.title}</h4>
                            <p>{props.giftcard004.price}</p>
        </div>
    )
}

function Card005005(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/005/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard005.title}</h4>
                            <p>{props.giftcard005.price}</p>
        </div>
    )
}

function Card005006(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/006/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard006.title}</h4>
                            <p>{props.giftcard006.price}</p>
        </div>
    )
}

function Card005007(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/007/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard007.title}</h4>
                            <p>{props.giftcard007.price}</p>
        </div>
    )
}

function Card005008(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/008/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard008.title}</h4>
                            <p>{props.giftcard008.price}</p>
        </div>
    )
}

function Card005009(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/009/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard009.title}</h4>
                            <p>{props.giftcard009.price}</p>
        </div>
    )
}

function Card005010(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/010/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard010.title}</h4>
                            <p>{props.giftcard010.price}</p>
        </div>
    )
}

function Card005011(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/011/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard011.title}</h4>
                            <p>{props.giftcard011.price}</p>
        </div>
    )
}

function Card005012(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/012/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard012.title}</h4>
                            <p>{props.giftcard012.price}</p>
        </div>
    )

}
function Card005013(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/013/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard013.title}</h4>
                            <p>{props.giftcard013.price}</p>
        </div>
    )
}

function Card005014(props) {
    return(
        <div>
            <img src={"/img/goods_img/005/014/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.giftcard014.title}</h4>
                            <p>{props.giftcard014.price}</p>
        </div>
    )
}

function Card006001(props) {
    return(
        <div>
            <img src={"/img/goods_img/006/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.moneycard001.title}</h4>
                            <p>{props.moneycard001.price}</p>
        </div>
    )
}

function Card006002(props) {
    return(
        <div>
            <img src={"/img/goods_img/006/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.moneycard002.title}</h4>
                            <p>{props.moneycard002.price}</p>
        </div>
    )
}

function Card006003(props) {
    return(
        <div>
            <img src={"/img/goods_img/006/003/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.moneycard003.title}</h4>
                            <p>{props.moneycard003.price}</p>
        </div>
    )
}

function Card006004(props) {
    return(
        <div>
            <img src={"/img/goods_img/006/004/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.moneycard004.title}</h4>
                            <p>{props.moneycard004.price}</p>
        </div>
    )
}

function Card006005(props) {
    return(
        <div>
            <img src={"/img/goods_img/006/005/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.moneycard005.title}</h4>
                            <p>{props.moneycard005.price}</p>
        </div>
    )
}

function Card007001(props) {
    return(
        <div>
            <img src={"/img/goods_img/007/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.mart001.title}</h4>
                            <p>{props.mart001.price}</p>
        </div>
    )
}

function Card007002(props) {
    return(
        <div>
            <img src={"/img/goods_img/007/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.mart002.title}</h4>
                            <p>{props.mart002.price}</p>
        </div>
    )
}

function Card007003(props) {
    return(
        <div>
            <img src={"/img/goods_img/007/003/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.mart003.title}</h4>
                            <p>{props.mart003.price}</p>
        </div>
    )
}

function Card008001(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker001.title}</h4>
                            <p>{props.baker001.price}</p>
        </div>
    )
}

function Card008002(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker002.title}</h4>
                            <p>{props.baker002.price}</p>
        </div>
    )
}

function Card008003(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/003/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker003.title}</h4>
                            <p>{props.baker003.price}</p>
        </div>
    )
}

function Card008004(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/004/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker004.title}</h4>
                            <p>{props.baker004.price}</p>
        </div>
    )
}

function Card008005(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/005/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker005.title}</h4>
                            <p>{props.baker005.price}</p>
        </div>
    )
}

function Card008006(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/006/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker006.title}</h4>
                            <p>{props.baker006.price}</p>
        </div>
    )
}

function Card008007(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/007/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker007.title}</h4>
                            <p>{props.baker007.price}</p>
        </div>
    )
}

function Card008008(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/008/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker008.title}</h4>
                            <p>{props.baker008.price}</p>
        </div>
    )
}

function Card008009(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/009/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker009.title}</h4>
                            <p>{props.baker009.price}</p>
        </div>
    )
}

function Card008010(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/010/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker010.title}</h4>
                            <p>{props.baker010.price}</p>
        </div>
    )
}

function Card008011(props) {
    return(
        <div>
            <img src={"/img/goods_img/008/011/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.baker011.title}</h4>
                            <p>{props.baker011.price}</p>
        </div>
    )
}

function Card009001(props) {
    return(
        <div>
            <img src={"/img/goods_img/009/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.movie001.title}</h4>
                            <p>{props.movie001.price}</p>
        </div>
    )
}

function Card009002(props) {
    return(
        <div>
            <img src={"/img/goods_img/009/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.movie002.title}</h4>
                            <p>{props.movie002.price}</p>
        </div>
    )
}

function Card010001(props) {
    return(
        <div>
            <img src={"/img/goods_img/010/001/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.beautie001.title}</h4>
                            <p>{props.beautie001.price}</p>
        </div>
    )
}

function Card010002(props) {
    return(
        <div>
            <img src={"/img/goods_img/010/002/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.beautie002.title}</h4>
                            <p>{props.beautie002.price}</p>
        </div>
    )
}

function Card010003(props) {
    return(
        <div>
            <img src={"/img/goods_img/010/003/00" + (props.i + 1) + ".jpg"} />
                            <h4>{props.beautie003.title}</h4>
                            <p>{props.beautie003.price}</p>
        </div>
    )
}
export default App;
