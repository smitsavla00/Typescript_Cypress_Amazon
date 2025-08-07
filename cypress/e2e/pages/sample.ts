

class Sample {
    elemets ={
        dropdpwn1:()=>cy.get('#dropdowm-menu-1'),
        dropdpwn2:()=>cy.get('#dropdowm-menu-2'),
        dropdpwn3:()=>cy.get('#dropdowm-menu-3'),

        checkboxall:()=>cy.get('#checkboxes input[type="checkbox"]'),
        checkbox1:()=>cy.get('#checkboxes input[value="option-1"]'),
        checkbox2:()=>cy.get('#checkboxes input[value="option-2"]'),
        checkbox3:()=>cy.get('#checkboxes input[value="option-3"]'),
        checkbox4:()=>cy.get('#checkboxes input[value="option-4"]'),

        radioall:()=>cy.get('#radio-buttons input[type="radio"]'),
        radioGreen:()=>cy.get('#radio-buttons input[value="green"]'),
        radioBlue:()=>cy.get('#radio-buttons input[value="blue"]'),
        radioYellow:()=>cy.get('#radio-buttons input[value="yellow"]'),
        radioorange:()=>cy.get('#radio-buttons input[value="orange"]'),
        radiopurple:()=>cy.get('#radio-buttons input[value="purple"]'),

        radiolettucre:()=>cy.get('#radio-buttons-selected-disabled input[value="lettuce"]'),
        radiocabbage:()=>cy.get('#radio-buttons-selected-disabled input[value="cabbage"]'),
        radiopumpkin:()=>cy.get('#radio-buttons-selected-disabled input[value="pumpkin"]'),

    }
    visit() {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    }

    dropdownflow(){
        this.visit()
        //this.elemets.dropdpwn1().select('python').should('have.text','Python')
        this.elemets.dropdpwn1().select('python').find(':selected').should('have.text','Python')     
        this.elemets.dropdpwn2().select('TestNG').should('have.value','testng')
        this.elemets.dropdpwn3().select('JavaScript').should('have.value','javascript')
    }


    checkbox(){
        this.visit()
        this.elemets.checkbox3().uncheck()
        this.elemets.checkboxall().each((el)=>{
            cy.wrap(el).should('be.enabled').should('not.be.checked');
        })
        this.elemets.checkbox1().check()
        this.elemets.checkbox2().check()
        this.elemets.checkbox4().check()
        this.elemets.checkbox1().should('be.checked')
        this.elemets.checkbox2().should('be.checked')
        this.elemets.checkbox4().should('be.checked')
        this.elemets.checkbox3().should('not.be.checked')


    }

    radioflow(){
        this.visit()
        this.elemets.radioall().each((el2)=>{
            cy.wrap(el2).should('not.be.selected')
        })
        this.elemets.radioBlue().check().should('be.checked')
    }

    SelectedDisabledflow(){
        this.visit()
        this.elemets.radiocabbage().should('not.be.checked').and('be.disabled')
        this.elemets.radiolettucre().should('not.be.checked').check()
        //this.elemets.radiocabbage().should('not.be.checked')
        //this.elemets.radiopumpkin().should('be.checked')
    }


    hoverDelete(){
        cy.visit('https://webdriveruniversity.com/To-Do-List/index.html')
        cy.contains('h1', 'TO-DO LIST').should('be.visible');
        cy.get('#container input[placeholder="Add new todo"]').type('Hello world{enter}')
        cy.contains('li', 'Practice magic').trigger('mouseover').find('i.fa-trash').click()
        cy.contains('li', 'Hello world').trigger('mouseover').find('i.fa-trash').click()
        cy.contains('li', 'Go to potion class').click().should('have.class','completed')
    }

    dynamictext(){
        cy.visit('https://webdriveruniversity.com/Accordion/index.html');
        cy.get('#hidden-text').should('have.text', 'LOADING.. PLEASE WAIT..');

        cy.get('#hidden-text', { timeout: 10000 }).should('have.text', 'LOADING COMPLETE.');

        cy.get('#manual-testing-accordion').should('have.class','accordion').click().should('have.class','accordion active')
    }

    loader(){
        cy.visit('https://webdriveruniversity.com/Ajax-Loader/index.html')
        cy.get('#loader').should('be.visible')
        cy.get('#loader').should('not.be.visible')
    }

    dragdrop(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html#')

        //Deag and drop
        cy.get('#draggable').should('be.visible')
        cy.get('#droppable').should('be.visible')

        cy.get('#draggable').drag('#droppable', { force: true })

        cy.get('#droppable').should('contain.text','Dropped!')

        //Double click
        cy.get('#double-click').dblclick().should('have.class','div-double-click double')

        //hover and
        cy.get('.dropbtn').first().should('have.text','Hover Over Me First!').realHover();
        cy.get('.dropdown-content').should('be.visible').contains('a.list-alert', 'Link 1').click()

        // click and hold
        cy.get('#click-box').trigger('mousedown',{which:1}).wait(3000).should('have.text','Well done! keep holding that click now.....').trigger('mouseup',{which:1}).should('have.text','Dont release me!!!')

    }


}

export default new Sample();