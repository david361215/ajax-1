console.log('我是main.js')
let n = 1;
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >=200 && request.status< 300){
            const div = document.createElement('div')
            div.innerHTML = request.response;
            document.body.appendChild(div)
        }
    }
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >=200 && request.status <300){
            const script = document.createElement('script')
            script.innerHTML = request.response;
            document.body.appendChild(script)
        }        
    }
    request.send();
}
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/style.css")
    request.onreadystatechange = ()=>{
        // 下载完成，但是不知道是成功2xx,还是失败 4xx 5xx
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                const style = document.createElement('style')
                style.innerHTML = request.response;
                document.head.appendChild(style)
            }else{
                alert('加载 CSS 失败')
            }
        }
    }
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/4.xml")
    request.onreadystatechange = ()=>{
        // 下载完成，但是不知道是成功2xx,还是失败 4xx 5xx
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                const xml = request.responseXML
                const text = xml.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                alert('加载 XML 失败')
            }
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/5.json")
    request.onreadystatechange = ()=>{
        // 下载完成，但是不知道是成功2xx,还是失败 4xx 5xx
        if(request.readyState === 4 && request.status >=200 && request.status <300){
            const object = JSON.parse(request.response)
            myName.textContent =  object.name
        }
    }
    request.send()
}
getNextPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET",`/page${n+1}`)
    request.onreadystatechange = ()=>{
        // 下载完成，但是不知道是成功2xx,还是失败 4xx 5xx
        if(request.readyState === 4 && request.status >=200 && request.status <300){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n+=1;
        }
    }
    request.send()
}