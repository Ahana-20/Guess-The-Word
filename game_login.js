function add_user(){
    player1_name = document.getElementById("P1").value;
    player2_name = document.getElementById("P2").value;

    localStorage.setItem("Player 1 name",player1_name);
    localStorage.setItem("Player 2 name",player2_name);

    window.location = "game_page.html";

}