import { Component, OnInit, Input } from "@angular/core";
import { Server } from "../shared/models/server";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit {
  @Input() serverInput: Server;

  color: string;
  buttonText: string;
  constructor() {}

  ngOnInit() {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.color = "#66bb6a";
      this.buttonText = "Shut Down";
    } else {
      this.serverInput.isOnline = false;
      this.color = "#ff6b6b";
      this.buttonText = "Start";
    }
  }

  toggleStatus(onlineStatus: boolean) {
    this.serverInput.isOnline = !this.serverInput.isOnline;
    this.setServerStatus(!onlineStatus);
  }
}
