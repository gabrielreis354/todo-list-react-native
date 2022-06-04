/* eslint-disable prettier/prettier */
import PushNotification from 'react-native-push-notification';

export default class NotificationManager {
  setNavegador(novoNavegador) {
    navigator = novoNavegador;
  }

  // Configuração orientada pela documentação do React Native Push Notification
  // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[NotificationManager] onRegister token:', token);
      },
      onNotification: function (notification) {
        console.log('[NotificationManager] onNotification:', notification);
        navigator.navigate('TelaReparosSuites');
      },
    });
  };

  // É aqui que nossa notificação para o Android é construida
  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };

  // Fução que exibe a notificação
  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      /* Propriedades do Android */
      ...this.buildAndroidNotification(id, title, message, data, options),

      /* Propriedades do Android e iOS */
      id: id || '',
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      channelId: 'channel-Id',
      userInteraction: false,
    });
  };

  //Criação de canais
  createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'channel-Id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  // Função que cancela todas notiificações e limpa as que estão no centro de notificações
  cancelAllLocalNotification = () => {
    PushNotification.cancelAllLocalNotifications();
  };
}
