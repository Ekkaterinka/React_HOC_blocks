import  { useState } from 'react';


const New =  (Component: any) => (props: any) => {
    if (props.view <=100) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            <Component {...props}>{props.children}</Component>
        </div>
    )}
};

const Popular = (Component: any) => (props: any) => {
    if (props.view >=1000) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            <Component {...props}>{props.children}</Component>
        </div>
    )
};
}

function Article(props: any) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

function Video(props: any) {
    return (
        <div className="item item-video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

const NewArticle = New(Article)
const NewVideo = New(Video)
const PopularArticle = Popular(Article)
const PopularVideo = Popular(Video)

function List(props: any) {
    return props.list.map((item: any) => {
        switch (item.type) {
            case 'video':
                return (
                    <div>
                     <PopularVideo view = {item.views} url = {item.url} views = {item.views} /> 
                    <NewVideo view = {item.views} url = {item.url} views = {item.views}  />
                    </div>
                );

            case 'article':
                return (
                    <div>
                        <PopularArticle view = {item.views} title = {item.title} views = {item.views} />
                        <NewArticle view = {item.views} title = {item.title} views = {item.views}  />
                    </div>
                );
        }
    });
};

export default function App() {
    const [list, setList] = useState([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}