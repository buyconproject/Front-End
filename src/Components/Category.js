import React from 'react';
import './Category.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AccordionDetails} from '@mui/material';
import {Link, Route, Switch} from 'react-router-dom';


function Category() {
    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
        window.scrollTo({
          top: 730,
          behavior: "smooth"
        });
    }

    return (
        <div className="contant_category">
            <Accordion disableGutters={true} defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 커피/음료
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_Cafe">
                        <Link to="/goods/001001" onClick={handleTop}>투썸플레이스 </Link>
                        <Link to="/goods/001002" onClick={handleTop}>이디야</Link>
                        <Link to="/goods/001003" onClick={handleTop}>아티제</Link>
                        <Link to="/goods/001004" onClick={handleTop}>할리스커피</Link>
                        <Link to="/goods/001005" onClick={handleTop}>빽다방</Link>
                        <Link to="/goods/001006" onClick={handleTop}>팔공티</Link>
                        <Link to="/goods/001007" onClick={handleTop}>요거프레소</Link>
                        <Link to="/goods/001008" onClick={handleTop}>커피빈</Link>
                        <Link to="/goods/001009" onClick={handleTop}>메가MGC커피</Link>
                        <Link to="/goods/001010" onClick={handleTop}>쥬씨</Link>
                        <Link to="/goods/001011" onClick={handleTop}>엔제리너스</Link>
                        <Link to="/goods/001012" onClick={handleTop}>스타벅스</Link>

                    </div>
                </AccordionDetails>

            </Accordion>
            <Accordion disableGutters={true} defaultExpanded={true} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 아이스크림
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_IceCream">
                    <Link to="/goods/002001" onClick={handleTop}>베스킨라빈스</Link>
                    <Link to="/goods/002002" onClick={handleTop}>나뚜루</Link>
                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 치킨/피자/버거
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_FastFood">
                        <Link to="/goods/003001" onClick={handleTop}>BHC</Link>
                        <Link to="/goods/003002" onClick={handleTop}>버거킹</Link>
                        <Link to="/goods/003003" onClick={handleTop}>롯데리아</Link>
                        <Link to="/goods/003004" onClick={handleTop}>도미노피자</Link>
                        <Link to="/goods/003005" onClick={handleTop}>노랑통닭</Link>
                        <Link to="/goods/003006" onClick={handleTop}>교촌치킨</Link>
                        <Link to="/goods/003007" onClick={handleTop}>순수치킨</Link>
                        <Link to="/goods/003008" onClick={handleTop}>멕시카나치킨</Link>
                        <Link to="/goods/003009" onClick={handleTop}>빅스타피자</Link>
                        <Link to="/goods/003010" onClick={handleTop}>뽕뜨락피자</Link>
                        <Link to="/goods/003011" onClick={handleTop}>누구나홀딱반한닭</Link>
                        <Link to="/goods/003012" onClick={handleTop}>이마트피자</Link>
                        <Link to="/goods/003013" onClick={handleTop}>가마로강정</Link>
                        <Link to="/goods/003014" onClick={handleTop}>굽네치킨</Link>
                        <Link to="/goods/003015" onClick={handleTop}>678치킨</Link>
                        <Link to="/goods/003016" onClick={handleTop}>네네치킨</Link>
                        <Link to="/goods/003017" onClick={handleTop}>뉴욕버거</Link>
                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 외식/분식/레스토랑
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_res">
                        <Link to="/goods/004001" onClick={handleTop}>새마을식당</Link>
                        <Link to="/goods/004002" onClick={handleTop}>온더보더</Link>
                        <Link to="/goods/004003" onClick={handleTop}>생어거스틴</Link>
                        <Link to="/goods/004004" onClick={handleTop}>죠스떡볶이</Link>
                        <Link to="/goods/004005" onClick={handleTop}>명량핫도그</Link>
                        <Link to="/goods/004006" onClick={handleTop}>지호한방삼계탕</Link>
                        <Link to="/goods/004007" onClick={handleTop}>땅스부대찌개</Link>
                        <Link to="/goods/004008" onClick={handleTop}>롤링파스타</Link>
                        <Link to="/goods/004009" onClick={handleTop}>바르다 김선생</Link>
                        <Link to="/goods/004010" onClick={handleTop}>하남돼지집</Link>
                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 상품권
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_GiftCard">
                        <Link to="/goods/005001" onClick={handleTop}>올리브영기프트카드</Link>
                        <Link to="/goods/005002" onClick={handleTop}>CJ푸드빌기프트카드</Link>
                        <Link to="/goods/005003" onClick={handleTop}>더마켓기프트카드</Link>
                        <Link to="/goods/005004" onClick={handleTop}>정관장</Link>
                        <Link to="/goods/005005" onClick={handleTop}>CJ기프트카드</Link>
                        <Link to="/goods/005006" onClick={handleTop}>신세계 상품권</Link>
                        <Link to="/goods/005007" onClick={handleTop}>하이마트</Link>
                        <Link to="/goods/005008" onClick={handleTop}>토이저러스</Link>
                        <Link to="/goods/005009" onClick={handleTop}>롯데마트</Link>
                        <Link to="/goods/005010" onClick={handleTop}>컬쳐랜드(통합권)</Link>
                        <Link to="/goods/005011" onClick={handleTop}>교보문고</Link>
                        <Link to="/goods/005012" onClick={handleTop}>해피머니</Link>
                        <Link to="/goods/005013" onClick={handleTop}>홈플러스</Link>
                        <Link to="/goods/005014" onClick={handleTop}>SK주유소</Link>
                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 금액권
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_MoneyCard">
                        <Link to="/goods/006001" onClick={handleTop}>쿠팡이츠</Link>
                        <Link to="/goods/006002" onClick={handleTop}>요기요</Link>
                        <Link to="/goods/006003" onClick={handleTop}>더본코리아 통합권</Link>
                        <Link to="/goods/006004" onClick={handleTop}>스마일기프트</Link>
                        <Link to="/goods/006005" onClick={handleTop}>해피콘</Link>
                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 편의점/마트
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_Mart">
                        <Link to="/goods/007001" onClick={handleTop}>이마트24</Link>
                        <Link to="/goods/007002" onClick={handleTop}>CU</Link>
                        <Link to="/goods/007003" onClick={handleTop}>GS25</Link>
                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 베이커리/도넛
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_Baker">
                        <Link to="/goods/008001" onClick={handleTop}>파리바게트</Link>
                        <Link to="/goods/008002" onClick={handleTop}>뚜레쥬르 잔액관리권</Link>
                        <Link to="/goods/008003" onClick={handleTop}>뚜레쥬르</Link>
                        <Link to="/goods/008004" onClick={handleTop}>이삭토스트</Link>
                        <Link to="/goods/008005" onClick={handleTop}>에그드랍</Link>
                        <Link to="/goods/008006" onClick={handleTop}>크리스피크림도넛</Link>
                        <Link to="/goods/008007" onClick={handleTop}>써브웨이</Link>
                        <Link to="/goods/008008" onClick={handleTop}>홍루이젠</Link>
                        <Link to="/goods/008009" onClick={handleTop}>던킨도너츠</Link>
                        <Link to="/goods/008010" onClick={handleTop}>디저트39</Link>
                        <Link to="/goods/008011" onClick={handleTop}>호밀호두</Link>
                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 영화/테마파크
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_Movie">
                        <Link to="/goods/009001" onClick={handleTop}>즐거운스마일콘 CGV예매권</Link>
                        <Link to="/goods/009002" onClick={handleTop}>CGV기프트카드</Link>

                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    - 뷰티
                </AccordionSummary>
                <AccordionDetails>
                    <div className="ctg_Beautie">
                        <Link to="/goods/010001" onClick={handleTop}>랄라블라</Link>
                        <Link to="/goods/010002" onClick={handleTop}>롭스</Link>
                        <Link to="/goods/010003" onClick={handleTop}>토니모리</Link>

                    </div>
                </AccordionDetails>

            </Accordion>
        </div>
    );
}

export default Category;