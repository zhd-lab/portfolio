<script>
    import { onMount } from "svelte";

    let cardStyle = "width: 90%; text-align: center; margin: 1vh; border: solid white 0.2vh; border-radius: 1vh;";

    // Tableaux d'images
    let competencesArray = [
        " ", " ", " ", 
        " ", " ", " ", 
        " ", " ", " ",
        " ", " ", " ", " "
    ];

    let projectsArray = [
        " ", " ", " ", 
        " ", " ", " ", 
        " ", " ", " ",
        " ", " ", " ", " "
    ];

    onMount(() => {
        animate();
    });

    async function animate() {
        let index = 1;
        while (index <= 6) {
            await new Promise((resolve) => setTimeout(resolve, 250));
            let leftElement = document.getElementById(`left-${6 - index}`);
            let rightElement = document.getElementById(`right-${6 + index}`);
            let leftBottomElement = document.getElementById(`left-${6 + index}`);
            let rightTopElement = document.getElementById(`right-${6 - index}`);
            let competence = document.getElementById("left-6");
            let projet = document.getElementById("right-6");

            if (leftElement) {
                leftElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
                leftElement.style.transform = `translate(${competence.offsetLeft - leftElement.offsetLeft}px, ${competence.offsetTop - leftElement.offsetTop}px)`;
                leftElement.style.opacity = "0";
            }

            if (rightElement) {
                rightElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
                rightElement.style.transform = `translate(${projet.offsetLeft - rightElement.offsetLeft}px, ${projet.offsetTop - rightElement.offsetTop}px)`;
                rightElement.style.opacity = "0";
            }

            if (leftBottomElement) {
                leftBottomElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
                leftBottomElement.style.transform = `translate(${competence.offsetLeft - leftBottomElement.offsetLeft}px, ${competence.offsetTop - leftBottomElement.offsetTop}px)`;
                leftBottomElement.style.opacity = "0";
            }

            if (rightTopElement) {
                rightTopElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
                rightTopElement.style.transform = `translate(${projet.offsetLeft - rightTopElement.offsetLeft}px, ${projet.offsetTop - rightTopElement.offsetTop}px)`;
                rightTopElement.style.opacity = "0";
            }

            index++;
        }
    }
</script>

<div class="global_box">
    <div class="box left">
        <div style="width: 90%;">
            {#each Array(13) as _, i}
                <div style={cardStyle} id={`left-${i}`}>
                    {competencesArray[i]}
                    {i === 6 ? "Compétences" : ""}
                </div>
            {/each}
        </div>
    </div>
    <div class="box center">
        <div style="width: 90%;">
            <div style={cardStyle} id="center-0">Center</div>
        </div>
    </div>
    <div class="box right">
        <div style="width: 90%;">
            {#each Array(13) as _, i}
                <div style={cardStyle} id={`right-${i}`}>
                    {projectsArray[i]}
                    {i === 6 ? "Projets" : ""}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .global_box {
        display: flex;
        width: 100vw;
        height: 100vh;
    }
    .box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 2rem;
        background-color: #161b1d;
    }

    /* anims items */
    #left-6 {
        background-color: #161b1d71;
    }
    #center-0 {
        background-color: #161b1d71;
    }
    #right-6 {
        background-color: #161b1d71;
    }
</style>
