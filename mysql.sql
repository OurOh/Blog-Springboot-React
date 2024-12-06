/* 포스팅 관련 테이블 */
create table post_table(
    id bigint not null auto_increment,
    post varchar(255) not null,  -- 제목_입니다 방식으로 사용
    category_id int,
    title varchar(255) not null,
    content text,
    create_date datetime default current_timestamp,
    hit int default '0',
    empathy int default '0',
    hashtag varchar(255) default null,  -- 저작은 쉼표기준으로 함. 사랑,삶,기쁨 
    primary key(id)
) ENGINE=InnoDB charset=utf8mb4;


create table post_file(
    id bigint not null auto_increment,
    post_id bigint not null,
    nfilename varchar(100),
    ofilename varchar(100),
    ext varchar(5),
    fsize bigint,
    primary key(id)
);

create table post_comment(
    id bigint not null auto_increment,
    post_id bigint not null,
    username varchar(100),
    useremail varchar(100),
    social varchar(10),
    comment text,
    create_date datetime default current_timestamp,
    primary key(id)
);


create table post_category(
    id int not null auto_increment,
    title varchar(50),
    num int,
    primary key(id)
);

/* 사이트 운영 */
create table myskills(
    id int not null auto_increment,
    name varchar(20),
    value int,
    primary key(id)
);
create table mytimelines(
    id int not null auto_increment,
    jobtitle varchar(255),
    wheres varchar(50), 
    wdate varchar(15),
    primary key(id)
);