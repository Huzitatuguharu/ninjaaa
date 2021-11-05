function showToast(){
    const toast = document.createElement('div')
    toast.innerHTML = "カートに追加しました"
    toast.classList.add('toast')
    card.appendChild(toast)
    
    setTimeout(() => {
      card.removeChild(toast)
    }, 3000)
  }