index =0

def on_forever():
    global index 
    unplot(index)

    index +=1
    if index == 25:
       index =0
    plot(index)
    basic.pause(100)

def plot(index):
    x = index % 5
    y = index // 5
    led.plot(x, y)

def unplot(index):        
    x = index % 5
    y = index // 5  
    led.unplot(x, y)

basic.forever(on_forever)

