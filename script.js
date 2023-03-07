let log = new Log(document.querySelector('.log'))

function stopDefAction(event) {
    event.preventDefault();
}

function teste() {
    var fight1 = document.querySelector('.fight1');
    var fight2 = document.querySelector('.fight2');
    var you = fight1.value
    var he = fight2.value
    console.log(you)
    
    if(you == "Mago" && he == "Big Monster"){

        let char = new Soracerer('Mago')//Soracerer || Knight
        let monster = new BigMonster()//BigMonster || LittleMonster

        const stage = new Stage(
        char,
        monster,
        document.querySelector('#char'),
        document.querySelector('#monster'),
        log
        )
        stage.start();
    }if(you == "Mago" && he == "Little Monster"){

        let char = new Soracerer('Mago')//Soracerer || Knight
        let monster = new LittleMonster()//BigMonster || LittleMonster

        const stage = new Stage(
        char,
        monster,
        document.querySelector('#char'),
        document.querySelector('#monster'),
        log
        )
        stage.start();
    }
    
    if (you == "Guerreiro" && he == "Big Monster") {
    
        let char = new Knight('Guerreiro')//Soracerer || Knight
        let monster = new BigMonster()//BigMonster || LittleMonster

        const stage = new Stage(
        char,
        monster,
        document.querySelector('#char'),
        document.querySelector('#monster'),
        log
        ) 
    stage.start();
    }if(you == "Guerreiro" && he == "Little Monster"){

        let char = new Knight('Guerreiro')//Soracerer || Knight
        let monster = new LittleMonster()//BigMonster || LittleMonster

        const stage = new Stage(
        char,
        monster,
        document.querySelector('#char'),
        document.querySelector('#monster'),
        log
        )
        stage.start();
    }
}


