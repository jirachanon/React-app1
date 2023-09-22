import React from "react";

export default function Home() {
    return(
        <p style={{textAlign:'center'}}>
            <h3>ยินดีต้อนรับสู่ react store</h3>
            รายชื่อ <a href="/product">สินค้า</a> ที่เรามีจ าหน่าย
                <br/>
            แต่ท่านต้องเป็น <a href="/member">สมาชิก</a> จึงจะ
                สั่งซื้อได้<br/>
            หากมีข้อสงสัยโปรดติดต่อเรา
        </p>
    )
}