import matplotlib.pyplot as plt

ylist_s = [4.2, 1.7, 1.5, 0.3]
xlist_s = [0, 3, 4, 7]
ylist_n = [4, 2, 0.7, 0.5, 0.22]
xlinst_n = [1, 2, 5, 6, 8]
x_labels = ["Tabak", "Shopping", "Internet", "Alkohol", "Medikamente", "Esstörung", "Sex", "Drogen", "Glücksspiel"]

fig, axs = plt.subplots()

axs.bar(xlist_s, ylist_s, 0.6)
axs.bar(xlinst_n, ylist_n, 0.6, color="green")
axs.set_ylabel("Anzahl in Millionen")
axs.set_facecolor("#d3d3d3")
fig.subplots_adjust(bottom=0.1)
fig.patch.set_facecolor("#d3d3d3")
plt.xticks(ticks=[i for i in range(0, 9)], labels=x_labels, rotation=45)
plt.title("Süchtige in Deutschland")
plt.legend(["stoffgebunden", "nicht stoffgebunden"])

plt.show()