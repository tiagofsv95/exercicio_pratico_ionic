import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { FriendsService } from '../api/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  friends;

  constructor(
    private friendsService: FriendsService,
    public actionSheetControler: ActionSheetController
  ) { };

  deleteFriend(id) {
    this.friends = this.friends.filter((toDelete) => toDelete.id !== id )
  }

  async apresentarActionSheet(id) {
    const actionSheet = await this.actionSheetControler.create({
      header: 'Opções',
      cssClass: 'classe',
      buttons: [
        {
          text: "Editar",
          icon: "pencil",
          handler: () => {
            alert("Clicado");
          }
        },
        {
          text: "Deletar",
          icon: "trash",
          role: "destructive",
          handler: () => {
            this.deleteFriend(id);
            alert(`Deletado ${id}`);
            /* escrever a função de apagar a imagem aqui */
          }
        },
        {
          text: "Cancelar",
          icon: "close",
          role: "cancel",
          handler: () => {
            alert("Cancelado");
          }
        }]
    })

    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();
    console.log("Cancelei e a role é ", role)
  }

  ngOnInit() {
    this.friends = this.friendsService.getFriends();
  };

}
